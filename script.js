
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                const sentMessage = document.createElement('div');
                sentMessage.className = 'message sent';
                sentMessage.textContent = message;
                chatMessages.appendChild(sentMessage);
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        document.getElementById('messageInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });