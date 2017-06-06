// global css
import './theme.scss';

// classes you want to use immediately
export class App {
  constructor(dom, options) {
    this.dom = dom;
    this.props = options;

    this.title = 'Shex Mapping Tool';

    // for debugging
    window.app = this;
  }

  log(str) {
    const div = document.createElement('div');
    div.innerHTML = str;
    this.dom.appendChild(div);
  }

  render() {
    document.getElementById('title').innerText = this.title;
  }

}

/**
 * entrance code for SPA
 */
function main() {
  document.title = 'Loading...';

  const app = new App(document.querySelector('.container'));

  app.render();
}

document.addEventListener('DOMContentLoaded', main);
