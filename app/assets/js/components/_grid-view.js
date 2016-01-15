(function(Hiof, undefined) {

  // Functions
  //gridAppendData = function(data, settings) {
  //
  //};

  gridAppendData = function(data, settings) {

    const lang = Hiof.options.language.toString();
    const i18n = Hiof.options.i18n;
    //var data = semesterStartLoadData(options);
    //debug('From itservicesAppendData:');
    //debug(lang);
    //debug(i18n.en.itservices.readmore);
    data.meta = settings;

    //debug(data);
    let templateSource, markup;

    templateSource = Hiof.Templates['grid/show'];
    markup = templateSource(data);


    $('#grid').html(markup);
    let scrollDestEl = "#content";
    Hiof.scrollToElement(scrollDestEl);

    if (settings.server === 'www') {
      Hiof.tabindex();
    }

  };


  gridLoadData = function(options = {}) {
    const pageTreeID = $('#grid').attr('data-page-tree-id');

    //24236
    // Setup the query
    let settings = $.extend({
      id: pageTreeID,
      url: 'http://hiof.no/api/v2/page-relationship/',
      server: 'www2',
      visible: 'on'
    }, options);

    //let settings = Object.assign(
    //  {},
    //  defaults,
    //  options
    //);

    let contentType = "application/x-www-form-urlencoded; charset=utf-8";
    if (window.XDomainRequest) { //for IE8,IE9
      contentType = "text/plain";
    }
    $.ajax({
      url: settings.url,
      method: 'GET',
      async: true,
      dataType: 'json',
      data: settings,
      contentType: contentType,
      success: function(data) {
        //alert("Data from Server: "+JSON.stringify(data));
        debug('Settings from success');
        debug(settings);
        debug('Data from success');
        debug(data);
        //return data;
        gridAppendData(data, settings);
        //Hiof.articleDisplayView(data, settings);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        //alert("You can not send Cross Domain AJAX requests: " + errorThrown);
      }

    });


  };

  // Routing
  Path.map("#/informasjon").to(function() {
    let options ={
      server:  $('#grid').attr('data-server')
    }
    gridLoadData(options);
  });
  Path.map("#/informasjon/").to(function() {
    let options ={
      server:  $('#grid').attr('data-server')
    }
    gridLoadData(options);
  });
  initatePathgrid = function() {
    // Load root path if no path is active
    Path.root("#/informasjon");
  };

  // Run functions on load
  $(function() {
    //console.log("JS loaded");
    if ($('#grid').length) {

      initatePathgrid();
      Path.listen();

    }
    $('.collapse').collapse();
    //$(document).on('click', '#grid a', function(e) {
    //    $(this).toggleClass('open');
    //    //e.preventDefault();
    //    //var url = $(this).attr('href');
    //    //if (url.substring(0, 2) == "#/") {
    //    //    //debug('String starts with #/');
    //    //} else if (url.substring(0, 1) == "#") {
    //    //    hash = url + "";
    //    //    e.preventDefault();
    //    //    setTimeout(function() {
    //    //        scrollToElement(hash);
    //    //    }, 200);
    //    //
    //    //}
    //});


  });
  // Expose functions to the window

})(window.Hiof = window.Hiof || {});
