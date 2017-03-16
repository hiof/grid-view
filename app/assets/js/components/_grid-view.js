(function(Hiof, undefined) {

  gridAppendData = function(data, settings) {
    const lang = Hiof.options.language.toString();
    const i18n = Hiof.options.i18n;

    data.meta = settings;

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

    // Setup the query
    let defaults = {
      id: pageTreeID,
      url: '//www.hiof.no/api/v2/page-relationship/',
      server: 'www2',
      visible: 'on'
    };

    let settings = Object.assign(
      {},
      defaults,
      options
    );

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
        if (Hiof.illustrations) {
          $.each(data.children, function(i){
            if (i < Hiof.illustrations.length) {
              data.children[i].image = Hiof.illustrations[i].image;
            }
          });
          // Hack to remove "nyttige linker" from the view
          data.children.splice(7,1);

        }

        gridAppendData(data, settings);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        //alert("You can not send Cross Domain AJAX requests: " + errorThrown);
      }

    });


  };

  // Routing
  Path.map("#/informasjon").to(function() {
    const url = $('#grid').attr('data-url');
    const server = $('#grid').attr('data-server');
    let options = {};
    if(typeof server != 'undefined'){
      options.server = server;
    }
    if(typeof url != 'undefined'){
      options.url = url;
    }
    gridLoadData(options);
  });
  Path.map("#/informasjon/").to(function() {
    const url = $('#grid').attr('data-url');
    const server = $('#grid').attr('data-server');
    let options = {};
    if(typeof server != 'undefined'){
      options.server = server;
    }
    if(typeof url != 'undefined'){
      options.url = url;
    }
    gridLoadData(options);
  });
  initatePathgrid = function() {
    // Load root path if no path is active
    Path.root("#/informasjon");
  };

  // Run functions on load
  $(function() {
    if ($('#grid').length) {
      initatePathgrid();
      Path.listen();
    }
  });


})(window.Hiof = window.Hiof || {});
