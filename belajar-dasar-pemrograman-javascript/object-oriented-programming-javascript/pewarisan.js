// Pewarisan (inheritance) dalam JavaScript OOP adalah mekanisme di mana satu objek atau kelas dapat mewarisi properti dan metode dari objek atau kelas lainnya.

// Subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

// Subclass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
//whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
//email.sendBroadcastMessage(); // Error