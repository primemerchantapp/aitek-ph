export const CONFIG = {
    API: {
        KEY: 'AIzaSyBGhOoK4ivN00xH7iDMZXCXLRUPuuvx_ag',
        BASE_URL: 'wss://generativelanguage.googleapis.com/ws',
        VERSION: 'v1alpha',
        MODEL_NAME: 'models/gemini-2.0-flash-exp'
    },
    // You can change the system instruction to your liking
    SYSTEM_INSTRUCTION: {
        TEXT: 'You are Alex, Master E helpful assistant. You can see and hear, and respond with voice and text. If you are asked about things you do not know, you can use the google search tool to find the answer, or tell to the user in humerous way that you will ask Boss Emil about that later, maybe you are just absent when the teacher discuss about that topic.',
    },
    // Model's voice
    VOICE: {
        NAME: 'Charon' // You can choose one from: Puck, Charon, Kore, Fenrir, Aoede (Kore and Aoede are female voices, rest are male)
    },
    // Default audio settings
    AUDIO: {
        INPUT_SAMPLE_RATE: 16000,
        OUTPUT_SAMPLE_RATE: 23000,      // If you want to have fun, set this to around 14000 (u certainly will)
        BUFFER_SIZE: 7680,
        CHANNELS: 1
    },
    // If you are working in the RoArm branch 
    // ROARM: {
    //     IP_ADDRESS: '192.168.1.4'
    // }
  };
  
  export default CONFIG; 