var posts=["2024/09/07/hello-world/","2024/09/07/生产者消费者模式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };