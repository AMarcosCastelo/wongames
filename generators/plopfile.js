module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
      description: 'application component logic',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'component name please'
      }],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/stories.tsx',
          templateFile: 'templates/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styled.ts',
          templateFile: 'templates/styled.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.ts',
          templateFile: 'templates/test.ts.hbs'
        }
      ]
  });
};
