function whatsapp(item) {
    const phoneNumber = "254724483626";

    const messages = {
        "Consultation Session": "Hello, I'd like to book a Consultation Session.",
        "Farm visit/tour": "Hello, I'd like a farm visit.",
        "Avocado Farm Start-up": "Hello, I'd like to inquire about an Avocado Farm Start-up.",
        "Bee Farm Start-up": "Hello, I'd like to inquire about a Bee Farm Start-up.",
        "Avocado": "Hello, I'd like to buy Avocados.",
        "Honey": "Hello, I'd like to buy Honey.",
        "Honey Comb": "Hello, I'd like to buy Honey Comb."
    };

    const message = messages[item] || "Hello, I have a general inquiry.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}