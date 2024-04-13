/**
* Template Name: NiceAdmin
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

window.onload = pageload;
localStorage.setItem("FiltroAtividadesHoje", "2");
localStorage.setItem("FiltroAtividadesSemana", "10");
localStorage.setItem("FiltroAtividadesMes", "30");
localStorage.setItem("FiltroAtividadesAno", "106");

function pageload() {
  //Pesquisar na barra de pesquisa
  let botaoPesquisa = document.getElementById("botaoPesquisa");
  botaoPesquisa.onclick = searchbar;

  //VerificaNumeroAtividades
  verificaNumeroAtividades();

 // verificaElemento(); Utilizar quando atualizarmos o localStorage para carregar elemento default


  //Filtro cartao das atividades hoje
  let filtroAtividadesHoje = document.getElementById("filtroAtividadesHoje");
  filtroAtividadesHoje.addEventListener("click", function() {
  filtroHoje();
  });

   //Filtro cartao das atividades Semana
   let filtroAtividadesSemana = document.getElementById("filtroAtividadesSemana");
   filtroAtividadesSemana.addEventListener("click", function() {
   filtroSemana();
   });

   //Filtro cartao das atividades Mes
   let filtroAtividadesMes = document.getElementById("filtroAtividadesMes");
   filtroAtividadesMes.addEventListener("click", function() {
   filtroMes();
   });

  //Filtro cartao das Atividades Ano
   let filtroAtividadesAno = document.getElementById("filtroAtividadesAno");
   filtroAtividadesAno.addEventListener("click", function() {
   filtroAno();
   });


  //Ao clicar no enter na barra de pesquisa
  let searchInput = document.getElementById("search");
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Impede o comportamento padrão do Enter
      searchbar(); // Chama a função searchbar quando "Enter" é pressionado
    }
  });
  
  } //fim do pageLoad

  //Funcao da barra de pesquisa
  function searchbar() { 
    let searchTerm = document.getElementById('search').value;
    let elementoRelatorio = document.getElementById('idPesquisa');
    if (searchTerm === 'relatório') {
      elementoRelatorio.scrollIntoView({ behavior: 'smooth' });
    }
    }

    //Verifica numero do cartao das atividades
    function verificaNumeroAtividades(){
      let valor = document.getElementById("valorAlterarAtividades");
      if(valor !== localStorage.getItem("FiltroAtividadesMes")){
        valor.textContent = localStorage.getItem("FiltroAtividadesMes");
      }
    }

    //funcao do filtro hoje
    function filtroHoje(){
      let valor = document.getElementById("valorAlterarAtividades");
      valor.textContent = localStorage.getItem("FiltroAtividadesHoje");
      let nome = document.getElementById("nomeFiltroAtividades");
      nome.textContent = "| Hoje";
    }

    //funcao do filtro semana
    function filtroSemana(){
      let valor = document.getElementById("valorAlterarAtividades");
      valor.textContent = localStorage.getItem("FiltroAtividadesSemana");
      let nome = document.getElementById("nomeFiltroAtividades");
      nome.textContent = "| Semana";
    }

    //funcao do filtro Mes
    function filtroMes(){
      let valor = document.getElementById("valorAlterarAtividades");
      valor.textContent = localStorage.getItem("FiltroAtividadesMes");
      let nome = document.getElementById("nomeFiltroAtividades");
      nome.textContent = "| Mês";
    }

    //funcao do filtro Ano
    function filtroAno(){
      let valor = document.getElementById("valorAlterarAtividades");
      valor.textContent = localStorage.getItem("FiltroAtividadesAno");
      let nome = document.getElementById("nomeFiltroAtividades");
      nome.textContent = "| Ano";
    }

    //funcao verifica que existe elemento no localStorage
    function verificaElemento(){
      if(!(localStorage.getItem("FiltroAtividadesMes"))){
        localStorage.setItem("FiltroAtividadesMes", "30");
      }
    }


    
  
    
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    templates: [{
        title: 'New Table',
        description: 'creates a new table',
        content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable, {
      perPageSelect: [5, 10, 15, ["All", -1]],
      columns: [{
          select: 2,
          sortSequence: ["desc", "asc"]
        },
        {
          select: 3,
          sortSequence: ["desc"]
        },
        {
          select: 4,
          cellClass: "green",
          headerClass: "red"
        }
      ]
    });
  })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

  //Gráfico áreas das atividades
  document.addEventListener("DOMContentLoaded", () => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltip: {
        trigger: 'item',
        show:false
      },
      legend: {
        top: '2%',
        left: 'center'
      },
      series: [{
        name: 'Área',
        type: 'pie',
        radius: ['35%', '65%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
          
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '13',
            fontWeight: 'bold',
            formatter: '{b}\n{c}'
          }
        },
        labelLine: {
          show: false
        },
        data: [{
          value: 1048,
          name: 'Iniciativa desportiva'
        },
        {
          value: 735,
          name: 'Saúde mental'
        },
        {
          value: 580,
          name: 'Bem-estar da comunidade'
        }
        ]
      }]
    });
  });

  //Gráfico material em uso
  
  document.addEventListener("DOMContentLoaded", () => {
    new Chart(document.querySelector('#doughnutChart'), {
      type: 'doughnut',
      data: {
        labels: [
          'Material em uso',
        ],
        datasets: [{
          label: 'Material',
          data: [100,25],
          backgroundColor: [
            'rgb(95, 158, 160)',
            'rgb(220, 220, 220)'
          ],
          hoverOffset: 4
        }]
      }
    });
  });

  //Gráfico atividades meses
  document.addEventListener("DOMContentLoaded", () => {
    new ApexCharts(document.querySelector("#reportsChart"), {
      series: [{
        name: 'Atividades',
        data: [31, 40, 28, 51, 42, 82, 56, 31, 29, 20, 15, 30],
      }, {
        name: 'Doações',
        data: [11, 32, 45, 32, 34, 52, 41, 10, 53, 35, 60, 120]
      },],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      markers: {
        size: 4
      },
      colors: ['#4154f1', '#2eca6a'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        
        categories: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago','Setem', 'Out','Nov','Dez']
      },

     
    }).render();
  });

})();