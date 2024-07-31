// Overriding dalam JavaScript OOP adalah konsep di mana sebuah metode dalam kelas anak (subclass) menimpa (override) metode dengan nama yang sama dalam kelas induk (superclass).

// Constructor Overriding
const mailService = new MailService(); // akan memanggil method constructor pada class MailService

class MailService {
    constructor(sender) {
        this.sender = sender;
    }
}

class WhatsAppService extends MailService {
    // overriding constructor
    constructor(sender, isBusiness) {
        super(sender);

        this.isBusiness = isBusiness;
    }
}