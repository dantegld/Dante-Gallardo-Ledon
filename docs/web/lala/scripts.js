let messages = document.querySelector('.messages');
        let messageHeight = messages.scrollHeight;
        
        // Clone messages to create continuous scrolling effect
        messages.innerHTML += messages.innerHTML;
        
        // Start scrolling messages
        let startScroll = setInterval(() => {
            messages.style.transform = `translateY(-50%)`;
            setTimeout(() => {
                messages.style.transition = 'none';
                messages.style.transform = 'none';
                setTimeout(() => {
                    messages.style.transition = 'transform 15s linear';
                }, 50);
            }, 15000);
        }, 15000);