import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      joinWaitlist: "Join Waitlist",
      signIn: "Sign In",
      mansaLogoAlt: "Mansa's Logo",
      manageCustomerRelationships:
        "Manage Your Customer Relationships on Autopilot",
      mansaBuildingAI:
        "Mansa is building an AI-native CRM to fully automate the customer and investor relations management for start-ups and SMEs",
      "Get started with your free account today.":
        "Get started with your free account today.",
      "No credit card required. Enjoy a 7-day free trial.":
        "No credit card required. Enjoy a 7-day free trial.",
      "First Name *": "First Name *",
      "Last Name *": "Last Name *",
      "Business Email *": "Business Email *",
      "Password *": "Password *",
      "Confirm Password *": "Confirm Password *",
      "Referral Code": "Referral Code",
      "Yes, I agree to the": "Yes, I agree to the",
      "Privacy Policy": "Privacy Policy",
      "Terms of Usage": "Terms of Usage",
      "SIGN UP": "SIGN UP",
      "Creating Account...": "Creating Account...",
      "Please wait while we create your account.":
        "Please wait while we create your account.",
      "An error occurred during the submission process.":
        "An error occurred during the submission process.",
      "Submission Failed": "Submission Failed",
      Retry: "Retry",
      testimonial_quote:
        "Mansastars is exactly what a founder needs. A platform that allows you to manage your investor funnel which is always a challenge while growing your own business. Very excited to start using the CRM & Investor Update Report. It's the features I've been waiting for. Really impressive product and business!",
      kosta_scholiadis: "Kosta Scholiadis",
      founder_ceo: "Founder & CEO of Street Wallet",
      trusted_by:
        "Trusted by over 800 fund managers and start-ups across the globe",
      integrate_title: "Integrate with Apps You Use Daily",
      integrate_subtitle:
        "Seamlessly connect your CRM with Gmail, Google Meet, and more for enhanced productivity.",
      investor_update_title:
        "Discover our AI-powered investor relations automation",
      investor_update_subtitle:
        "Revolutionizing How You Connect with Investors for Real-Time Insights and Efficiency",
      investment_managers_need_updates:
        "Investment Managers require Updates from Founders",
      investors_update_template: "Investors Update Template",
      footer_motto: "The digital hub for founders and VCs",
      footer_contact_us: "Contact Us",
      footer_email: "info@mansastars.com",
      footer_address: "Alte Jakobstrasse 77b, 10179 Berlin, Germany",
      login_title: "Welcome back!",
      login_subtitle: "You talk, We organise.",
      login_email_label: "Email",
      login_password_label: "Password",
      login_forgot_password: "Forgot your password?",
      login_button_loading: "Loading...",
      login_button: "Log In",
      login_no_account: "Don't have an account?",
      login_register: "Register",
      login_logging_in: "Logging In...",
      login_logging_in_text:
        "We are processing your login details. This will only take a few moments.",
      login_submission_failed: "Submission Failed",
      login_try_again: "Please try again.",
      login_retry: "Retry",
      login_error_occurred: "An error occurred while logging in",
      google_login_processing: "Logging In...",
      google_login_processing_text:
        "We are processing your login details. This will only take a few moments.",
      google_login_error_occurred: "An error occurred while logging in.",
      google_account_not_found: "Account Not Found",
      google_sign_up_prompt:
        "Account not found. Please sign up to create a new account.",
      google_incorrect_password_title: "Incorrect Password",
      google_incorrect_password_text:
        "This email is already registered with a password. Please sign in using your email and password.",
      google_login_failed: "Login Failed",
      google_retry: "Retry",
      google_sign_up: "Sign Up",
      google_login_error: "Login Error",
      google_failed_google_login:
        "Failed to login with Google. Please try again.",
      google_sign_in_with_google: "Sign in with Google",
      google_or: "OR",
      trusted_by_fund_managers:
        "Trusted by over 800 fund managers and start-ups across the globe",
      request_feature: "Request a feature",
      ai_automation_title: "AI Automation",
      ai_automation_note:
        "Pipeline: Your pipeline updates itself and deals are allocated to stages. Notes: After your meeting, notes are created for you. Call reports: Call reports are created for you and shared with all.",

      marketing_title: "Marketing",
      marketing_note:
        "Grow Your Business: We have an ICP (Ideal Customer Profile) based approach. You receive regular suggestions of fitting targets to contact. You can create e-mail sequences and automate outreach. AI based copywriting/E-mail writing. Send Features updates.",

      ticket_management_title: "Ticket Management System",
      ticket_management_note:
        "User requests coming from E-mail or social media including Whatsapp, Facebook, IG, and more are translated to tickets for your team to manage. Answer user requests directly from your CRM to all users. Track performance in customer service and improve.",

      analytics_title: "Analytics",
      analytics_note:
        "Track number of opportunities by stages. Track best performing customers. Track performance of marketing campaigns. Track direct traffic. Track customer service performance.",
      sidepanel: {
        dashboards: "Dashboards",
        contacts: "Contacts",
        broadcast: "Broadcast",
        investorsUpdate: "Send Investors Update",
        upcoming: "Upcoming",
        contactUs: "Contact Us",
      },
      logout: "Log Out",
      CreateDashboard: "Create a Dashboard",
      WelcomeFreeTrial: "Welcome to your free trial!",
      LimitedTimeOffer: "Limited Time Offer! {{price}} until {{endDate}}.",
      TrialDaysMessage:
        "You have {{daysLeft}} {{daysLeft === 1 ? 'day' : 'days'}} to try Mansa's CRM {{paidFeaturesLink}}. Upgrade anytime for as low as €29.99/month.",
      Subscribe: "Subscribe",
      PaidFeaturesLink: "paid features",
      ExistingDashboards: "Existing Dashboards",
      DeleteConfirmationTitle: "Are you sure?",
      DeleteConfirmationText: "You will not be able to recover this deal!",
      DeleteConfirmationConfirm: "Yes, delete it!",
      DeleteConfirmationCancel: "No, keep it",
      DeleteSuccess: "Deleted!",
      DeleteSuccessText: "Your deal has been deleted.",
      DeleteError: "Error",
      DeleteErrorText: "Failed to delete deal",
      UpdateError: "Error",
      UpdateErrorText: "Failed to update deal details",
      CreateNewDashboard: "Create a New Dashboard",
      SubscriptionUpgradeRequired: "Subscription Upgrade Required",
      SubscriptionUpgradeText:
        "You have reached your limit. Please upgrade your subscription to create a new dashboard.",
      Upgrade: "Upgrade",
      Cancel: "Cancel",
      ErrorMessage: "Something went wrong. Please try again.",
      DashboardName: "Dashboard Name*",
      PlaceholderDealName: "Sundi",
      Deadline: "Deadline",
      DealSize: "Deal Size ($)",
      PlaceholderDealSize: "1,000,000",
      CreateDashboardButton: "Create a Dashboard",
      "Add from contact database": "Add from contact database",
      "Click to add to this dashboard": "Click to add to this dashboard",
      "Add a New Contact": "Add a New Contact",
      "Deal Size Amount": "Deal Size Amount",
      "In-Negotiation Value": "In-Negotiation Value",
      "Deal Signed Value": "Deal Signed Value",
      stage: {
        research: "Research",
        prospect: "Prospect",
        contacted: "Contacted",
        pitch: "Pitch",
        review: "Review",
        partner: "Partner",
        termSheet: "Term Sheet",
        negotiation: "Negotiation",
        deal: "Deal",
        followUp: "Follow-up",
        rejection: "Rejection",
      },
      add_new_contact: "Add a new contact to your pipeline",
      title: "Title",
      title_placeholder: "Mr./Mrs./Ms./Dr./Engr.",
      first_name_required: "First Name*",
      first_name_placeholder: "Sundi",
      last_name_required: "Last Name*",
      last_name_placeholder: "Keita",
      company: "Company",
      company_placeholder: "Mansa, LLC",
      deal_size: "Deal Size ($)",
      deal_size_placeholder: "1,000,000",
      email: "Contact Email",
      email_placeholder: "sundi@sankore.com",
      phone_number: "Phone Number",
      phone_number_placeholder: "+123456789",
      current_stage: "Current Stage",
      meeting_date: "Meeting Date",
      notes: "Notes",
      create_contact: "Create Contact",
      contact_created_success: "Contact created successfully.",
      all_contacts: "All Contacts",
      search_contacts_placeholder: "Search Contacts...",
      delete_contact_error: "Failed to delete contact",
      "export_contacts": {
    "title": "Export Contacts",
    "text": "Are you sure you want to export your contacts?",
    "confirmButtonText": "Yes, export it!",
    "cancelButtonText": "Cancel",
    "fields": {
      "first_name": "First Name",
      "last_name": "Last Name",
      "gender": "Gender",
      "organization_name": "Organization"
    },
    "success": {
      "title": "Success!",
      "text": "Contacts exported successfully."
    },
    "error": {
      "title": "Export Error!",
      "text": "Failed to export contacts. Please try again."
    },
    "button_text": "Export Contacts"
  }
    },
  },
  fr: {
    translation: {
      joinWaitlist: "Rejoindre la liste d'attente",
      signIn: "Se connecter",
      mansaLogoAlt: "Logo de Mansa",
      manageCustomerRelationships:
        "Gérez vos relations clients en pilote automatique",
      mansaBuildingAI:
        "Mansa développe un CRM natif IA pour automatiser entièrement la gestion des relations clients et investisseurs pour les start-ups et les PME",
      "Get started with your free account today.":
        "Commencez avec votre compte gratuit aujourd'hui.",
      "No credit card required. Enjoy a 7-day free trial.":
        "Aucune carte de crédit requise. Profitez d'un essai gratuit de 7 jours.",
      "First Name *": "Prénom *",
      "Last Name *": "Nom de famille *",
      "Business Email *": "E-mail professionnel *",
      "Password *": "Mot de passe *",
      "Confirm Password *": "Confirmer le mot de passe *",
      "Referral Code": "Code de parrainage",
      "Yes, I agree to the": "Oui, j'accepte la",
      "Privacy Policy": "Politique de confidentialité",
      "Terms of Usage": "Conditions d'utilisation",
      "SIGN UP": "INSCRIPTION",
      "Creating Account...": "Création de compte...",
      "Please wait while we create your account.":
        "Veuillez patienter pendant que nous créons votre compte.",
      "An error occurred during the submission process.":
        "Une erreur est survenue lors du processus de soumission.",
      "Submission Failed": "Échec de la soumission",
      Retry: "Réessayer",
      testimonial_quote:
        "Mansastars est exactement ce dont un fondateur a besoin. Une plateforme qui vous permet de gérer votre entonnoir d'investisseurs, ce qui est toujours un défi tout en développant votre propre entreprise. Très excité de commencer à utiliser le CRM et le Rapport de Mise à Jour des Investisseurs. Ce sont les fonctionnalités que j'attendais. Produit et entreprise vraiment impressionnants !",
      kosta_scholiadis: "Kosta Scholiadis",
      founder_ceo: "Fondateur et PDG de Street Wallet",
      trusted_by:
        "Fié par plus de 800 gestionnaires de fonds et start-ups à travers le monde",
      integrate_title:
        "Intégrez les applications que vous utilisez au quotidien",
      integrate_subtitle:
        "Connectez sans effort votre CRM avec Gmail, Google Meet, et bien d'autres pour une productivité améliorée.",
      investor_update_title:
        "Découvrez notre automatisation des relations avec les investisseurs alimentée par l'IA",
      investor_update_subtitle:
        "Révolutionner la manière dont vous connectez avec les investisseurs pour des insights en temps réel et une efficacité accrue",
      investment_managers_need_updates:
        "Les gestionnaires d'investissements ont besoin de mises à jour des fondateurs",
      investors_update_template: "Modèle de mise à jour pour les investisseurs",
      footer_motto: "Le hub numérique pour les fondateurs et les VCs",
      footer_contact_us: "Contactez-nous",
      footer_email: "info@mansastars.com",
      footer_address: "Alte Jakobstrasse 77b, 10179 Berlin, Allemagne",
      login_title: "Bon retour !",
      login_subtitle: "Vous parlez, nous organisons.",
      login_email_label: "Email",
      login_password_label: "Mot de passe",
      login_forgot_password: "Mot de passe oublié ?",
      login_button_loading: "Chargement...",
      login_button: "Se connecter",
      login_no_account: "Vous n'avez pas de compte ?",
      login_register: "S'inscrire",
      login_logging_in: "Connexion...",
      login_logging_in_text:
        "Nous traitons vos informations de connexion. Cela ne prendra que quelques instants.",
      login_submission_failed: "Échec de la soumission",
      login_try_again: "Veuillez réessayer.",
      login_retry: "Réessayer",
      login_error_occurred: "Une erreur est survenue lors de la connexion",
      google_login_processing: "Connexion...",
      google_login_processing_text:
        "Nous traitons vos informations de connexion. Cela ne prendra que quelques instants.",
      google_login_error_occurred:
        "Une erreur est survenue lors de la connexion.",
      google_account_not_found: "Compte non trouvé",
      google_sign_up_prompt:
        "Compte non trouvé. Veuillez vous inscrire pour créer un nouveau compte.",
      google_incorrect_password_title: "Mot de passe incorrect",
      google_incorrect_password_text:
        "Cet e-mail est déjà enregistré avec un mot de passe. Veuillez vous connecter avec votre e-mail et mot de passe.",
      google_login_failed: "Connexion échouée",
      google_retry: "Réessayer",
      google_sign_up: "S'inscrire",
      google_login_error: "Erreur de connexion",
      google_failed_google_login:
        "Échec de la connexion avec Google. Veuillez réessayer.",
      google_sign_in_with_google: "Se connecter avec Google",
      google_or: "OU",
      trusted_by_fund_managers:
        "Fait confiance par plus de 800 gestionnaires de fonds et start-ups à travers le monde",
      request_feature: "Demander une fonctionnalité",
      ai_automation_title: "Automatisation IA",
      ai_automation_note:
        "Pipeline: Votre pipeline se met à jour automatiquement et les affaires sont allouées aux étapes. Notes: Après votre réunion, des notes sont créées pour vous. Rapports d'appel: Les rapports d'appel sont créés pour vous et partagés avec tous.",

      marketing_title: "Marketing",
      marketing_note:
        "Développez votre entreprise: Nous avons une approche basée sur le profil client idéal (ICP). Vous recevez régulièrement des suggestions de cibles à contacter. Vous pouvez créer des séquences d'e-mails et automatiser la prospection. Rédaction basée sur l'IA/Rédaction d'e-mails. Envoyez des mises à jour de fonctionnalités.",

      ticket_management_title: "Système de gestion des tickets",
      ticket_management_note:
        "Les demandes des utilisateurs provenant des e-mails ou des réseaux sociaux tels que Whatsapp, Facebook, IG, etc., sont traduites en tickets pour que votre équipe les gère. Répondez aux demandes des utilisateurs directement depuis votre CRM à tous les utilisateurs. Suivez les performances du service client et améliorez-vous.",

      analytics_title: "Analytique",
      analytics_note:
        "Suivez le nombre d'opportunités par étapes. Suivez les meilleurs clients performants. Suivez les performances des campagnes marketing. Suivez le trafic direct. Suivez les performances du service client.",
      sidepanel: {
        dashboards: "Tableaux de bord",
        contacts: "Contacts",
        broadcast: "Diffusion",
        investorsUpdate: "Envoyer une mise à jour aux investisseurs",
        upcoming: "À venir",
        contactUs: "Contactez-nous",
      },
      logout: "Déconnexion",
      CreateDashboard: "Créer un tableau de bord",
      WelcomeFreeTrial: "Bienvenue dans votre essai gratuit !",
      LimitedTimeOffer: "Offre limitée ! {{price}} jusqu'au {{endDate}}.",
      TrialDaysMessage:
        "Il vous reste {{daysLeft}} {{daysLeft === 1 ? 'jour' : 'jours'}} pour essayer le CRM de Mansa {{paidFeaturesLink}}. Passez à tout moment pour seulement 29,99 €/mois.",
      Subscribe: "S'abonner",
      PaidFeaturesLink: "fonctionnalités payantes",
      ExistingDashboards: "Tableaux de bord existants",
      DeleteConfirmationTitle: "Êtes-vous sûr ?",
      DeleteConfirmationText: "Vous ne pourrez pas récupérer cet élément !",
      DeleteConfirmationConfirm: "Oui, supprimez-le !",
      DeleteConfirmationCancel: "Non, gardez-le",
      DeleteSuccess: "Supprimé !",
      DeleteSuccessText: "Votre élément a été supprimé.",
      DeleteError: "Erreur",
      DeleteErrorText: "Échec de la suppression de l'élément",
      UpdateError: "Erreur",
      UpdateErrorText: "Échec de la mise à jour des détails de l'élément",
      CreateNewDashboard: "Créer un nouveau tableau de bord",
      SubscriptionUpgradeRequired: "Mise à niveau de l'abonnement requise",
      SubscriptionUpgradeText:
        "Vous avez atteint votre limite. Veuillez mettre à niveau votre abonnement pour créer un nouveau tableau de bord.",
      Upgrade: "Mettre à niveau",
      Cancel: "Annuler",
      ErrorMessage: "Quelque chose s'est mal passé. Veuillez réessayer.",
      DashboardName: "Nom du tableau de bord*",
      PlaceholderDealName: "Sundi",
      Deadline: "Date limite",
      DealSize: "Taille de l'offre ($)",
      PlaceholderDealSize: "1 000 000",
      CreateDashboardButton: "Créer un tableau de bord",
      "Add from contact database": "Ajouter depuis la base de contacts",
      "Click to add to this dashboard":
        "Cliquez pour ajouter à ce tableau de bord",
      "Add a New Contact": "Ajouter un nouveau contact",
      "Deal Size Amount": "Montant de la taille de l'affaire",
      "In-Negotiation Value": "Valeur en négociation",
      "Deal Signed Value": "Valeur signée de l'affaire",
      stage: {
        research: "Recherche",
        prospect: "Prospect",
        contacted: "Contacté",
        pitch: "Présentation",
        review: "Révision",
        partner: "Partenaire",
        termSheet: "Termes du Contrat",
        negotiation: "Négociation",
        deal: "Accord",
        followUp: "Suivi",
        rejection: "Rejet",
      },
      add_new_contact: "Ajouter un nouveau contact à votre pipeline",
      title: "Titre",
      title_placeholder: "M./Mme./Mlle./Dr./Ing.",
      first_name_required: "Prénom*",
      first_name_placeholder: "Sundi",
      last_name_required: "Nom de famille*",
      last_name_placeholder: "Keita",
      company: "Entreprise",
      company_placeholder: "Mansa, LLC",
      deal_size: "Montant de l'affaire ($)",
      deal_size_placeholder: "1 000 000",
      email: "E-mail du contact",
      email_placeholder: "sundi@sankore.com",
      phone_number: "Numéro de téléphone",
      phone_number_placeholder: "+123456789",
      current_stage: "Étape actuelle",
      meeting_date: "Date de réunion",
      notes: "Remarques",
      create_contact: "Créer un contact",
      contact_created_success: "Contact créé avec succès.",
      all_contacts: "Tous les Contacts",
      search_contacts_placeholder: "Rechercher des contacts...",
      delete_contact_error: "Échec de la suppression du contact",
      "export_contacts": {
    "title": "Exporter les contacts",
    "text": "Êtes-vous sûr de vouloir exporter vos contacts ?",
    "confirmButtonText": "Oui, exportez-le !",
    "cancelButtonText": "Annuler",
    "fields": {
      "first_name": "Prénom",
      "last_name": "Nom",
      "gender": "Genre",
      "organization_name": "Organisation"
    },
    "success": {
      "title": "Succès !",
      "text": "Contacts exportés avec succès."
    },
    "error": {
      "title": "Erreur d'exportation !",
      "text": "Échec de l'exportation des contacts. Veuillez réessayer."
    },
    "button_text": "Exporter les contacts"
  }
    },
  },
  de: {
    translation: {
      joinWaitlist: "Warteliste beitreten",
      signIn: "Anmelden",
      mansaLogoAlt: "Mansas Logo",
      manageCustomerRelationships:
        "Verwalten Sie Ihre Kundenbeziehungen im Autopilot",
      mansaBuildingAI:
        "Mansa entwickelt ein KI-natives CRM, um das Kunden- und Investorenbeziehungsmanagement für Start-ups und KMU vollständig zu automatisieren",
      "Get started with your free account today.":
        "Starten Sie noch heute mit Ihrem kostenlosen Konto.",
      "No credit card required. Enjoy a 7-day free trial.":
        "Keine Kreditkarte erforderlich. Genießen Sie eine 7-tägige kostenlose Testversion.",
      "First Name *": "Vorname *",
      "Last Name *": "Nachname *",
      "Business Email *": "Geschäftliche E-Mail *",
      "Password *": "Passwort *",
      "Confirm Password *": "Passwort bestätigen *",
      "Referral Code": "Empfehlungscode",
      "Yes, I agree to the": "Ja, ich stimme der",
      "Privacy Policy": "Datenschutzrichtlinie",
      "Terms of Usage": "Nutzungsbedingungen",
      "SIGN UP": "ANMELDEN",
      "Creating Account...": "Konto wird erstellt...",
      "Please wait while we create your account.":
        "Bitte warten Sie, während wir Ihr Konto erstellen.",
      "An error occurred during the submission process.":
        "Bei der Übermittlung ist ein Fehler aufgetreten.",
      "Submission Failed": "Einreichung fehlgeschlagen",
      Retry: "Wiederholen",
      testimonial_quote:
        "Mansastars ist genau das, was ein Gründer braucht. Eine Plattform, die es Ihnen ermöglicht, Ihren Investorentrichter zu verwalten, was immer eine Herausforderung ist, während Sie Ihr eigenes Geschäft ausbauen. Sehr gespannt, das CRM und den Investoren-Update-Bericht zu nutzen. Das sind die Funktionen, auf die ich gewartet habe. Wirklich beeindruckendes Produkt und Geschäft!",
      kosta_scholiadis: "Kosta Scholiadis",
      founder_ceo: "Gründer & CEO von Street Wallet",
      trusted_by: "Vertrauen von über 800 Fondsmanagern und Start-ups weltweit",
      integrate_title: "Integrieren Sie Apps, die Sie täglich verwenden",
      integrate_subtitle:
        "Verbinden Sie Ihr CRM nahtlos mit Gmail, Google Meet und mehr für eine höhere Produktivität.",
      investor_update_title:
        "Entdecken Sie unsere KI-gestützte Automatisierung der Investorenbeziehungen",
      investor_update_subtitle:
        "Revolutionierung, wie Sie mit Investoren in Echtzeit in Verbindung treten, um Einblicke und Effizienz zu steigern",
      investment_managers_need_updates:
        "Investmentmanager benötigen Updates von Gründern",
      investors_update_template: "Investoren-Update-Vorlage",
      footer_motto: "Das digitale Zentrum für Gründer und VCs",
      footer_contact_us: "Kontaktieren Sie uns",
      footer_email: "info@mansastars.com",
      footer_address: "Alte Jakobstrasse 77b, 10179 Berlin, Deutschland",
      login_title: "Willkommen zurück!",
      login_subtitle: "Sie sprechen, wir organisieren.",
      login_email_label: "E-Mail",
      login_password_label: "Passwort",
      login_forgot_password: "Passwort vergessen?",
      login_button_loading: "Wird geladen...",
      login_button: "Einloggen",
      login_no_account: "Kein Konto?",
      login_register: "Registrieren",
      login_logging_in: "Anmeldung...",
      login_logging_in_text:
        "Wir verarbeiten Ihre Anmeldedaten. Dies dauert nur wenige Augenblicke.",
      login_submission_failed: "Einreichung fehlgeschlagen",
      login_try_again: "Bitte versuchen Sie es erneut.",
      login_retry: "Erneut versuchen",
      login_error_occurred: "Beim Anmelden ist ein Fehler aufgetreten",
      google_login_processing: "Anmeldung...",
      google_login_processing_text:
        "Wir verarbeiten Ihre Anmeldedaten. Dies dauert nur wenige Augenblicke.",
      google_login_error_occurred: "Beim Anmelden ist ein Fehler aufgetreten.",
      google_account_not_found: "Konto nicht gefunden",
      google_sign_up_prompt:
        "Konto nicht gefunden. Bitte melden Sie sich an, um ein neues Konto zu erstellen.",
      google_incorrect_password_title: "Falsches Passwort",
      google_incorrect_password_text:
        "Diese E-Mail ist bereits mit einem Passwort registriert. Bitte melden Sie sich mit Ihrer E-Mail und Ihrem Passwort an.",
      google_login_failed: "Anmeldung fehlgeschlagen",
      google_retry: "Erneut versuchen",
      google_sign_up: "Registrieren",
      google_login_error: "Anmeldefehler",
      google_failed_google_login:
        "Fehler bei der Anmeldung mit Google. Bitte versuchen Sie es erneut.",
      google_sign_in_with_google: "Mit Google anmelden",
      google_or: "ODER",
      trusted_by_fund_managers:
        "Vertraut von über 800 Fondsmanagern und Start-ups weltweit",
      request_feature: "Eine Funktion anfordern",
      ai_automation_title: "KI-Automatisierung",
      ai_automation_note:
        "Pipeline: Ihre Pipeline aktualisiert sich selbst und Geschäfte werden Phasen zugewiesen. Notizen: Nach Ihrem Meeting werden Notizen für Sie erstellt. Gesprächsberichte: Gesprächsberichte werden für Sie erstellt und mit allen geteilt.",

      marketing_title: "Marketing",
      marketing_note:
        "Wachstum Ihres Unternehmens: Wir haben einen Ansatz basierend auf dem idealen Kundenprofil (ICP). Sie erhalten regelmäßig Vorschläge für passende Zielgruppen. Sie können E-Mail-Sequenzen erstellen und die Kontaktaufnahme automatisieren. KI-basierte Text-/E-Mail-Erstellung. Senden Sie Funktionsaktualisierungen.",

      ticket_management_title: "Ticketmanagementsystem",
      ticket_management_note:
        "Benutzeranfragen, die über E-Mails oder soziale Medien wie Whatsapp, Facebook, IG und mehr kommen, werden in Tickets für Ihr Team übersetzt. Beantworten Sie Benutzeranfragen direkt aus Ihrem CRM an alle Benutzer. Verfolgen Sie die Leistung im Kundenservice und verbessern Sie sich.",

      analytics_title: "Analytik",
      analytics_note:
        "Verfolgen Sie die Anzahl der Gelegenheiten nach Phasen. Verfolgen Sie die leistungsstärksten Kunden. Verfolgen Sie die Leistung von Marketingkampagnen. Verfolgen Sie den direkten Datenverkehr. Verfolgen Sie die Leistung des Kundenservice.",
      sidepanel: {
        dashboards: "Übersichten",
        contacts: "Kontakte",
        broadcast: "Übertragung",
        investorsUpdate: "Investoren-Update senden",
        upcoming: "Kommend",
        contactUs: "Kontaktieren Sie uns",
      },
      logout: "Abmelden",
      CreateDashboard: "Ein Dashboard erstellen",
      WelcomeFreeTrial: "Willkommen zu Ihrer kostenlosen Testversion!",
      LimitedTimeOffer:
        "Zeitlich begrenztes Angebot! {{price}} bis zum {{endDate}}.",
      TrialDaysMessage:
        "Sie haben noch {{daysLeft}} {{daysLeft === 1 ? 'Tag' : 'Tage'}} Zeit, um Mansa's CRM {{paidFeaturesLink}} auszuprobieren. Steigen Sie jederzeit für nur 29,99 €/Monat um.",
      Subscribe: "Abonnieren",
      PaidFeaturesLink: "bezahlte Funktionen",
      ExistingDashboards: "Vorhandene Dashboards",
      DeleteConfirmationTitle: "Bist du sicher?",
      DeleteConfirmationText:
        "Du kannst dieses Angebot nicht wiederherstellen!",
      DeleteConfirmationConfirm: "Ja, lösche es!",
      DeleteConfirmationCancel: "Nein, behalte es",
      DeleteSuccess: "Gelöscht!",
      DeleteSuccessText: "Dein Angebot wurde gelöscht.",
      DeleteError: "Fehler",
      DeleteErrorText: "Fehler beim Löschen des Angebots",
      UpdateError: "Fehler",
      UpdateErrorText: "Fehler beim Aktualisieren der Angebotsdetails",
      CreateNewDashboard: "Neues Dashboard erstellen",
      SubscriptionUpgradeRequired: "Abonnement-Upgrade erforderlich",
      SubscriptionUpgradeText:
        "Sie haben Ihr Limit erreicht. Bitte upgraden Sie Ihr Abonnement, um ein neues Dashboard zu erstellen.",
      Upgrade: "Upgrade",
      Cancel: "Abbrechen",
      ErrorMessage: "Etwas ist schief gelaufen. Bitte versuche es erneut.",
      DashboardName: "Dashboard Name*",
      PlaceholderDealName: "Sundi",
      Deadline: "Frist",
      DealSize: "Deal-Größe ($)",
      PlaceholderDealSize: "1.000.000",
      CreateDashboardButton: "Dashboard erstellen",
      "Add from contact database": "Aus der Kontaktdatenbank hinzufügen",
      "Click to add to this dashboard":
        "Klicken Sie, um dieses Dashboard hinzuzufügen",
      "Add a New Contact": "Neuen Kontakt hinzufügen",
      "Deal Size Amount": "Deal-Größenbetrag",
      "In-Negotiation Value": "Verhandlungswert",
      "Deal Signed Value": "Unterzeichneter Deal-Wert",
      stage: {
        research: "Forschung",
        prospect: "Interessent",
        contacted: "Kontaktiert",
        pitch: "Präsentation",
        review: "Überprüfung",
        partner: "Partner",
        termSheet: "Vertragsbedingungen",
        negotiation: "Verhandlung",
        deal: "Abkommen",
        followUp: "Nachverfolgung",
        rejection: "Ablehnung",
      },
      add_new_contact: "Fügen Sie ein neues Kontakt zu Ihrem Pipeline hinzu",
      title: "Anrede",
      title_placeholder: "Hr./Fr./Frl./Dr./Ing.",
      first_name_required: "Vorname*",
      first_name_placeholder: "Sundi",
      last_name_required: "Nachname*",
      last_name_placeholder: "Keita",
      company: "Firma",
      company_placeholder: "Mansa, LLC",
      deal_size: "Deal-Größe ($)",
      deal_size_placeholder: "1.000.000",
      email: "Kontakt-E-Mail",
      email_placeholder: "sundi@sankore.com",
      phone_number: "Telefonnummer",
      phone_number_placeholder: "+123456789",
      current_stage: "Aktuelle Phase",
      meeting_date: "Besprechungsdatum",
      notes: "Notizen",
      create_contact: "Kontakt erstellen",
      contact_created_success: "Kontakt erfolgreich erstellt.",
      all_contacts: "Alle Kontakte",
      search_contacts_placeholder: "Kontakte suchen...",
      delete_contact_error: "Fehler beim Löschen des Kontakts",
      "export_contacts": {
    "title": "Kontakte exportieren",
    "text": "Sind Sie sicher, dass Sie Ihre Kontakte exportieren möchten?",
    "confirmButtonText": "Ja, exportieren!",
    "cancelButtonText": "Abbrechen",
    "fields": {
      "first_name": "Vorname",
      "last_name": "Nachname",
      "gender": "Geschlecht",
      "organization_name": "Organisation"
    },
    "success": {
      "title": "Erfolg!",
      "text": "Kontakte erfolgreich exportiert."
    },
    "error": {
      "title": "Exportfehler!",
      "text": "Fehler beim Exportieren der Kontakte. Bitte versuchen Sie es erneut."
    },
    "button_text": "Kontakte exportieren"
  }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
