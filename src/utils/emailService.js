import emailjs from '@emailjs/browser';

/**
 * Send email using EmailJS
 * @param {string} serviceId - EmailJS Service ID
 * @param {string} templateId - EmailJS Template ID
 * @param {Object} templateParams - Template parameters (form data)
 * @param {string} publicKey - EmailJS Public Key
 * @returns {Promise} EmailJS send promise
 */
export const sendEmail = async (serviceId, templateId, templateParams, publicKey) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error Details:', {
      status: error.status,
      text: error.text,
      serviceId,
      templateId,
      publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'missing'
    });
    return { 
      success: false, 
      error: {
        message: error.text || error.message || 'Erreur inconnue',
        status: error.status,
        fullError: error
      }
    };
  }
};

/**
 * Format form data for EmailJS template
 * @param {FormData} formData - Form data object
 * @returns {Object} Formatted template parameters
 */
export const formatFormData = (formData) => {
  return {
    from_name: `${formData.prenom} ${formData.nom}`,
    from_email: formData.email,
    phone: formData.telephone,
    niveau: formData.niveau,
    matiere: formData.matiere,
    message: formData.message || 'Aucun message',
    to_name: 'Étudium',
  };
};

