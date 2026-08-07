const fs = require('fs');
const { JSDOM } = require('jsdom');
['unidad1.html','unidad2.html','unidad3.html'].forEach(file => {
  const html = fs.readFileSync(file,'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
  dom.window.document.addEventListener('DOMContentLoaded', () => {
    const topicTabs = dom.window.document.getElementById('topicTabs');
    const topicContent = dom.window.document.getElementById('topicContent');
    const buttons = dom.window.document.querySelectorAll('.topic-button');
    console.log(file, 'buttons', buttons.length, 'contentLen', topicContent ? topicContent.innerHTML.trim().length : 0);
  });
});
