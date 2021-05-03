const settings = {
  "name": "my-wordpress-theme",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "My WordPress Theme",
      "description": "My Wordpress Theme"
    }
  },
  "packages": [
    {
      "name": "my-wordpress-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://jsnation2020.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
