var posts=["2026/06/25/这是一篇新的博文/","2026/06/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };