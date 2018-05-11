# Phone Book

This is a simple phone book web application based on a project found in https://codepen.io/
The source is https://codepen.io/qujun/pen/KMdPYW

I added only a way to run / save and update the contact info.

## Folder structure

This is the folder structure
```
├── README.md
├── app.js
├── bin
│   └── www
├── package.json
├── phonebook.json
├── public
│   ├── css
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   ├── fonts
│   │   ├── glyphicons-halflings-regular.eot
│   │   ├── glyphicons-halflings-regular.svg
│   │   ├── glyphicons-halflings-regular.ttf
│   │   ├── glyphicons-halflings-regular.woff
│   │   └── glyphicons-halflings-regular.woff2
│   ├── images
│   └── js
│       ├── angular.min.js
│       ├── bootstrap.min.js
│       ├── index.js
│       └── jquery.min.js
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

## Phone Book

The phone book structure is quite simple and it is describe below:

```
[
    {
        name: 'Jerry',
        tel: '012-345-6789'
    },
    {
        name: '',
        tel: ''
    },
    ...
]
```

It will be placed in the *phonebook.json* file