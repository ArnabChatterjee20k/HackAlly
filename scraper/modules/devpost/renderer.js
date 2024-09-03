const data = [{'type': 'heading', 'text': 'Requirements', 'list': []}, {'type': 'description', 'text': '', 'list': []}, {'type': 'description', 'text': 'WHAT TO BUILD', 'list': []}, {'type': 'description', 'text': 'Build a working app (web, mobile or desktop) using Convex. The app must use Convex Auth or one of the recommended Auth providers\xa0and other Convex features.', 'list': []}, {'type': 'list', 'text': '', 'list': [['Best full-stack app that uses Convex (overall)'], ['Best Startup Idea'], ['Best use of AI with Convex in your app'], ['Most Viral App on', 'or']]}, {'type': 'description', 'text': 'Complete Hackathon Milestones', 'list': []}, {'type': 'description', 'text': 'Milestone 1: Getting Started', 'list': []}, {'type': 'list', 'text': '', 'list': [['Join Convex Discord #'], ['Create your app idea and form your team (max 4).'], ['Create your Convex Account'], ['If you’re new to Convex,'], ['Setup', 'or one of the', 'Auth providers in your app']]}, {'type': 'description', 'text': 'Milestone 2: Deploy Your App', 'list': []}, {'type': 'list', 'text': '', 'list': [['Ensure your app runs locally.'], ['Test your app (', ')'], ['Deploy your app using one of the suggested options', '.']]}, {'type': 'description', 'text': 'Milestone 3: Share Your App', 'list': []}, {'type': 'list', 'text': '', 'list': [['Share your app in the Convex Discord #show and tell channel.'], ['Share your app via', 'or', 'and mention Convex'], ['Ask for user feedback in the #hackathon channel.'], ['Submit your working app to judge when the submission period opens.']]}, {'type': 'description', 'text': 'WHAT TO SUBMIT', 'list': []}, {'type': 'list', 'text': '', 'list': [['Provide a public URL of your', 'working app', '.'], ['Provide a public URL to your code repository for judging.', [['If private, please share with']]], ['Include a video (it should be 3 minutes long) demonstrating how your app works and the data in the Convex dashboard.', [['Videos must be uploaded to YouTube, Vimeo, or another server with a public URL.'], ['Judges will not be reviewing beyond 3 minutes.']]], ['Your complete submission form on Devpost before the final deadline.'], ['Please check the', 'for full details.']]}]


function render(data) {
    function createElement(type, props, ...children) {
      let element = `<${type}`;
      Object.keys(props).forEach(prop => {
        element += ` ${prop}="${props[prop]}"`;
      });
      element += '>';
      children.forEach(child => {
        if (typeof child === 'string') {
          element += child;
        } else {
          element += child;
        }
      });
      element += `</${type}>`;
      return element;
    }
  
    function renderItem(item) {
      switch (item.type) {
        case 'heading':
          return createElement('h3', { class: 'subheader section-title-left' }, item.text);
        case 'description':
          return createElement('p', {}, item.text);
        case 'list':
          return createElement('ul', {},
            item.list.map(sublist => {
              if (Array.isArray(sublist[0])) {
                return createElement('li', {},
                  createElement('p', {}, sublist[0][0]),
                  renderList(sublist[0][1])
                );
              } else {
                return createElement('li', {}, ...sublist);
              }
            }).join('')
          );
        default:
          return '';
      }
    }
  
    function renderList(list) {
      return createElement('ul', {},
        list.map(sublist => {
          if (Array.isArray(sublist[0])) {
            return createElement('li', {},
              createElement('p', {}, sublist[0][0]),
              renderList(sublist[0][1])
            );
          } else {
            return createElement('li', {}, ...sublist);
          }
        }).join('')
      );
    }
  
    let html = '<article id="challenge-requirements">';
  
    data.forEach(item => {
      if (item.type === 'heading') {
        html += createElement('div', { class: 'section-title bold' },
          createElement('h3', { class: 'subheader section-title-left' }, item.text),
          createElement('span', { class: 'section-title-line' })
        );
      } else if (item.type === 'description' || item.type === 'list') {
        html += renderItem(item);
      }
    });
  
    html += '</article>';
    return html;
  }

  console.log(render(data))