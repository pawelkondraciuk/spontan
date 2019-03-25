import './styles.scss';
import Navigo from 'navigo';

const router = new Navigo('http://localhost:8080', true);

router
  .on('/', () => {
    router.navigate('/home');
  })
  .on('/:page', (params) => {
    const el = document.getElementById('main');
    Promise.all([
      import(`./pages/${params.page}.js`),
      import(`./pages/${params.page}.html`)
    ])
    .then(([jsPage, template]) => {
      const element = document.createElement('div');
      element.innerHTML = template.default;
      el.appendChild(element);
      jsPage.render(element);
    }, error => {
      el.innerHTML = `
      <div class="notification is-danger">
        Not found "pages/${params.page}.html"
      </div>
      `
    });
  })
  .resolve();
