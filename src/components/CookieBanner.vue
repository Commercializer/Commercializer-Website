<template>
  <div class="cookie-container">
    <div v-if="!cookiePreferencesSet" class="cookie-banner">
      <div class="cookie-content">
        <h2 class="cookie-title">We use cookies!</h2>
        <p class="cookie-message">
          Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand
          how you interact with it. The latter will be set only after consent. Let me choose
        </p>
        <div class="cookie-buttons">
          <button @click="acceptAllCookies" class="cookie-button accept-all">Accept all</button>
          <button @click="showPreferences" class="cookie-button preferences">Cookie Preferences</button>
        </div>
      </div>
    </div>
    
    <div v-if="showCookiePreferences" class="cookie-preferences-modal">
      <div class="cookie-preferences-content">
        <h2 class="cookie-preferences-title">Cookie Preferences</h2>
        <p class="cookie-preferences-description">
          You can decide which categories of cookies you wish to accept to improve your experience on our website. To learn more about the cookies we use on our site, please read our Cookie Policy
        </p>
        <ul class="cookie-preferences-list">
          <li class="cookie-preferences-item cookie-policy-link" @click="navigateToPrivacyPolicy">
             <div class="cookie-preferences-item-header">
                <span class="cookie-preferences-icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                      <path d="M5.338 0a6.143 6.143 0 0 0-2.776.356l.155.312c1.588 3.199 2.264 6.475 2.336 9.412l-.775.454a4.812 4.812 0 0 0-.186.022C3.243 13.054 3 11.524 3 10h-.005c0-.753.118-1.508.332-2.243a10.456 10.456 0 0 1 .244-.518l-.04-.085c.027-.208.087-.405.16-.592V2a.956.956 0 0 1 .09-.163h.005c.169-.33.498-.608.846-.786.146-.073.335-.146.472-.161A46.333 46.333 0 0 1 5.338 0z"/>
                      <path d="M14.814 10c-.17.797-.775 1.431-1.458 1.822-.29.151-.606.267-.918.349l-.239.055c-.567.135-1.37.36-1.872.632-.124.063-.203.133-.266.198a2.4 2.4 0 0 1-.51.138l-.265-.031a.863.863 0 0 1-.19-.081V10c0-.749.115-1.49.314-2.219a10.423 10.423 0 0 1 .248-.518l-.04-.085c.027-.208.088-.405.16-.592V2a.956.956 0 0 1 .09-.163h.005c.169-.33.498-.608.846-.786.146-.073.335-.146.472-.161A46.333 46.333 0 0 1 14.814 10z"/>
                      <path d="M10.854 5.854a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    </svg>
                </span>
                  <span>Cookie Policy</span>
              </div>
            <span class="cookie-preferences-arrow">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                 </svg>
            </span>
          </li>
            <li class="cookie-preferences-item">
                <div class="cookie-preferences-item-header">
                   <span class="cookie-preferences-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                      </svg>
                   </span>
                  <span>Accept necessary cookies</span>
              </div>
              <label class="cookie-switch">
                <input type="checkbox" v-model="necessaryCookies">
                <span class="slider"></span>
              </label>
            </li>
          <li class="cookie-preferences-item">
            <div class="cookie-preferences-item-header">
               <span class="cookie-preferences-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5ZM6 13.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 0 1 0v-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4Zm0-3.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4Zm0-3.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4Z"/>
                    </svg>
                </span>
                <span>Accept analytical cookies</span>
             </div>
                <label class="cookie-switch">
                  <input type="checkbox" v-model="analyticalCookies">
                  <span class="slider"></span>
               </label>
          </li>
          <li class="cookie-preferences-item">
            <div class="cookie-preferences-item-header">
              <span class="cookie-preferences-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.068.214-.168.433-.306.632-.225.347-.578.621-.914.762a.415.415 0 0 1-.064.016v.006Z"/>
                  </svg>
              </span>
                <span>Accept marketing cookies</span>
            </div>
            <label class="cookie-switch">
              <input type="checkbox" v-model="marketingCookies">
              <span class="slider"></span>
            </label>
          </li>
        </ul>
        <div class="cookie-preferences-buttons">
          <button @click="confirmPreferences" class="cookie-button confirm-preferences">Confirm my choice</button>
          <button @click="rejectAllCookies" class="cookie-button reject-all">Reject all</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

const cookiePreferencesSet = ref(false);
const showCookiePreferences = ref(false);
const necessaryCookies = ref(true);
const analyticalCookies = ref(false);
const marketingCookies = ref(false);

onMounted(() => {
  const preferencesSet = Cookies.get('cookie_preferences_set');
    if(preferencesSet){
        cookiePreferencesSet.value = true
        const cookieOptions = Cookies.get('cookie_options');
        if(cookieOptions){
        try{
          const parsedOptions = JSON.parse(cookieOptions)
            necessaryCookies.value = parsedOptions.necessaryCookies;
            analyticalCookies.value = parsedOptions.analyticalCookies;
            marketingCookies.value = parsedOptions.marketingCookies;
        }catch(error){
          console.error("Error parsing cookies", error)
        }
      }
    }
});

const acceptAllCookies = () => {
  setCookiePreferences(true,true,true);
  hideBanner();
};
const rejectAllCookies = () => {
  setCookiePreferences(true,false,false);
  hideBanner();
};

const confirmPreferences = () => {
    setCookiePreferences(necessaryCookies.value, analyticalCookies.value, marketingCookies.value)
    hideBanner();
}

const setCookiePreferences = (necessary:boolean, analytical:boolean, marketing:boolean) => {
    const cookieOptions = {
        necessaryCookies: necessary,
        analyticalCookies: analytical,
        marketingCookies: marketing
    };
    Cookies.set('cookie_preferences_set', 'true', { expires: 365 });
    Cookies.set('cookie_options', JSON.stringify(cookieOptions), { expires: 365 })
}

const showPreferences = () => {
  showCookiePreferences.value = true;
};

const hideBanner = () => {
    showCookiePreferences.value = false;
    cookiePreferencesSet.value = true;
}
const navigateToPrivacyPolicy = () =>{
  window.location.href = "/privacy-policy"
}

</script>

<style scoped>
.cookie-container{
    position: relative !important;
}
.cookie-banner {
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    background-color: #131022 !important;
    padding: 15px !important;
    text-align: center !important;
    z-index: 1000 !important;
    display: flex !important;
    justify-content: center !important;
  }
  .cookie-content {
    max-width: 800px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 10px !important;
  }
  .cookie-buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
      border-radius: 10px;
  }
  .cookie-title{
     color:white;
     margin-bottom: 10px;
  }
  .cookie-message{
      color:white;
       margin-bottom: 20px;
       font-size: 14px;
  }
  .cookie-button{
      background-color: #131022;
      color:white;
      border:none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 4px;
  
  }
  .accept-all{
        background: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
  }
  .preferences{
    border: 1px solid #505050;
  }
  .cookie-preferences-modal{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent overlay */
      z-index: 1001;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .cookie-preferences-content{
      background-color: #131022;
      padding: 20px;
      border-radius: 8px;
       max-width: 500px;
       width: 90%;
  }
  .cookie-preferences-title{
      color:white;
      margin-bottom: 10px;
  }
  .cookie-preferences-description{
      color: white;
      margin-bottom: 20px;
      font-size: 14px;
  }
  .cookie-preferences-list{
    padding: 0;
    margin-bottom: 20px;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
    .cookie-preferences-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #505050;
    cursor:default;
    }
  .cookie-preferences-item-header{
       display: flex;
      align-items: center;
      gap: 10px;
      color:white;
       font-size: 14px;
  }
   .cookie-policy-link{
       cursor:pointer;
    }
  .cookie-preferences-icon{
    display: flex;
  }
  .cookie-preferences-arrow{
     display: flex;
     color: #999999;
  }
  .cookie-preferences-buttons{
      display: flex;
      gap: 10px;
  }
  .confirm-preferences{
        background: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
  }
  .reject-all{
       border: 1px solid #505050;
  }
  .link{
      color: #81cb30;
      text-decoration: underline;
  }
  
  /* The switch - the box around the slider */
  .cookie-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }
  
  /* Hide default HTML checkbox */
  .cookie-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
      border-radius: 24px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #81cb30;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #81cb30;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
</style>