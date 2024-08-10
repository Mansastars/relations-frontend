import api from "../../api";

export async function getFilteredContacts(searchTerm) {
    try {
        const response = await api.get("contacts/all-contacts");
        const allContacts = response.data.data;

        if (!searchTerm) return allContacts;

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return allContacts.filter((contact) => {
            return (
                contact.first_name.toLowerCase().includes(lowerCaseSearchTerm) ||
                contact.last_name.toLowerCase().includes(lowerCaseSearchTerm) ||
                contact.email.toLowerCase().includes(lowerCaseSearchTerm) ||
                contact.phone_number.toLowerCase().includes(lowerCaseSearchTerm) ||
                contact.organization_name.toLowerCase().includes(lowerCaseSearchTerm)
            );
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }
}
