const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    const signUpForm = document.getElementById('signUpForm');
    signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const res = await fetch('https://server-57ql.onrender.com/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();

        if (res.ok) {
          alert('Đăng ký thành công!');
          console.log(data);
          window.location.href = 'index.html'; 
        } else {
          alert(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });

    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;

      try {
        const res = await fetch('https://server-57ql.onrender.com/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (res.ok) {
          alert('Đăng nhập thành công!');
          localStorage.setItem('token', data.token);
          window.location.href = 'components/main.html';
        } else {
          alert(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });