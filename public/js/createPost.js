const createPostHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post_title,
        post_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }


document.querySelector('#create-new-post').addEventListener(submit, createPostHandler);