import './styles.scss';
import Navigo from 'navigo';

const router = new Navigo('http://localhost:8080', true);

router
  .on('/', () => {
    router.navigate('/home');
  })
  .on('/:page', (params) => {
    const el = document.getElementById('main');
    import(`./pages/${params.page}.html`).then(pageContent => {
      el.innerHTML = pageContent.default;
    }, error => {
      el.innerHTML = `
      <div class="notification is-danger">
        Not found "pages/${params.page}.html"
      </div>
      `
    });
  })
  .resolve();
