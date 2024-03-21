function createDom(root) {
    // Write your code here.
  
    let newElement;
  
    
    if(typeof root === 'object' && root != null) {
      newElement = document.createElement(root.type)
      if(root.children != null) {
        newElement.appendChild(createDom(root.children))
      }
    }
  
    if (typeof root === 'string') {
      newElement = root;
    }
  
    if(root?.attributes != null) {
      Object.entries(root?.attributes).forEach((attribute, value) => {
        newElement.setAttribute(attribute, value);
      })
    }
    
    return newElement;
  }

  createDom({
    type: 'input',
    attributes: {
        class: 'my-input',
        type: 'password',
        placeholder: 'type your password',
    }
  });

  createDom({
    type: 'p',
    children: [
        'Hello',
        {
            type: 'strong',
            children: ['World']
        },
    ]
  })