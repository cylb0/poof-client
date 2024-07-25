interface FormFieldContent {
    label: string
    placeholder?: string
    description?: string
}

interface LoginFormContent {
    email: FormFieldContent
    password: FormFieldContent
    submit: {
        text: string
    }
}

/**
 * Login page content
 */
export const loginContent: LoginFormContent = {
    email: {
        label: 'Email',
        placeholder: 'example@domain.com',
        description: 'Votre adresse email',
    },
    password: {
        label: 'Mot de passe',
        placeholder: '',
        description: 'Doit contenir au minimum 12 caractères'
    },
    submit: {
        text: 'Se connecter'
    }
}