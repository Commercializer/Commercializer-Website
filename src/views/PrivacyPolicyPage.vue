<template>
  <Navbar :absolute="false" />
  <b-container>
    <PrivacyPolicy />
    <main>
      <h3>Introduction</h3>

      Welcome to Commercializer <br />

      Commercializer operates commercializer.global(hereinafter referred to as “Service”). <br />

      Our Privacy Policy governs your visit to
      <a target="_blank" href="https://commercializer.global">https://commercializer.global</a> and
      explains how we collect, safeguard and disclose information that results from your use of our
      Service. <br />

      We use your data to provide and improve Service. By using Service, you agree to the collection
      and use of information in accordance with this policy. Unless otherwise defined in this
      Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms
      and Conditions. <br />

      Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy
      Policy constitute your agreement with us (“Agreement”). <br />

      <div>
        <h3>Definitions</h3>
        <ul>
          <li
            v-for="definition in definitions"
            :key="definition"
            v-html="definition"
            style="margin-block: 0.5rem"
          ></li>
        </ul>
      </div>

      <div>
        <h3>Information Collection and Use</h3>

        We collect several different types of information for various purposes to provide and
        improve our Service to you.
      </div>

      <div>
        <h3>Use of Data</h3>

        Commercializer uses the collected data for various purposes:
        <ul>
          <li v-for="use in usesOfData" :key="use">{{ use }}</li>
        </ul>
      </div>
      <div>
        <h3>Retention of Data</h3>
        <p>
          We will retain your Personal Data only for as long as is necessary for the purposes set
          out in this Privacy Policy. We will retain and use your Personal Data to the extent
          necessary to comply with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies.
        </p>

        <p>
          We will also retain Usage Data for internal analysis purposes. Usage Data is generally
          retained for a shorter period, except when this data is used to strengthen the security or
          to improve the functionality of our Service, or we are legally obligated to retain this
          data for longer time periods.
        </p>
      </div>

      <div>
        <h3>Transfer of Data</h3>
        <p>
          Your information, including Personal Data, may be transferred to – and maintained on –
          computers located outside of your state, province, country, or other governmental
          jurisdiction where the data protection laws may differ from those of your jurisdiction.
        </p>
        <p>
          If you are located outside Sri Lanka and choose to provide information to us, please note
          that we transfer the data, including Personal Data, to Sri Lanka and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of such information
          represents your agreement to that transfer.
        </p>
        <p>
          Commercializer will take all the steps reasonably necessary to ensure that your data is
          treated securely and in accordance with this Privacy Policy and no transfer of your
          Personal Data will take place to an organization or a country unless there are adequate
          controls in place including the security of your data and other personal information.
        </p>
      </div>

      <div>
        <h3>Disclosure of Data</h3>
        <ul>
          <li v-for="(disclosures, title) in disclosuresOfData" :key="title">
            <h4>{{ title }}</h4>
            <ul>
              <li
                v-for="disclosure in disclosures"
                :key="disclosure"
                v-html="disclosure"
                style="margin-block: 0.5rem"
              ></li>
            </ul>
          </li>
        </ul>
      </div>
      <div></div>
      <div>
        <h3>Security of Data</h3>
        <p>
          The security of your data is important to us but remember that no method of transmission
          over the Internet or method of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Data, we cannot guarantee its
          absolute security.
        </p>
        <ul>
          <li v-for="(security, title) in securities" :key="title">
            <h5>{{ title }}</h5>
            <ul>
              <li
                v-for="point in security"
                :key="point"
                v-html="point"
                style="margin-block: 0.5rem"
              ></li>
            </ul>
          </li>
        </ul>
        <p>
          Please note, if you ask us to delete or stop selling your data, it may impact your
          experience with us, and you may not be able to participate in certain programs or
          membership services that require the usage of your personal information to function. But
          in no circumstances, we will discriminate against you for exercising your rights.
        </p>
      </div>
      <div>
        <h3>Service Providers</h3>
        <p>
          We may employ third-party companies and individuals to facilitate our Service (“Service
          Providers”), provide Service on our behalf, perform Service-related services or assist us
          in analyzing how our Service is used.
        </p>
        <p>
          These third parties have access to your Personal Data only to perform these tasks on our
          behalf and are obligated not to disclose or use it for any other purpose.
        </p>
      </div>
      <div>
        <h3>Analytics</h3>

        We may use third-party Service Providers to monitor and analyze the use of our Service.
      </div>

      <div>
        <h3>Payments</h3>
        <p>
          We may provide paid products and/or services within Service. In that case, we use
          third-party services for payment processing (e.g. payment processors).
        </p>
        <p>
          We will not store or collect your payment card details. That information is provided
          directly to our third-party payment processors whose use of your personal information is
          governed by their Privacy Policy. These payment processors adhere to the standards set by
          PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of
          brands like Visa, Mastercard, American Express, and Discover. PCI-DSS requirements help
          ensure the secure handling of payment information.
        </p>
      </div>

      <div>
        <h3>Links to Other Sites</h3>

        <p>
          Our Service may contain links to other sites that are not operated by us. If you click a
          third-party link, you will be directed to that third party’s site. We strongly advise you
          to review the Privacy Policy of every site you visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content, privacy policies, or
          practices of any third-party sites or services.
        </p>
      </div>
      <div>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our Service, prior to the
          change becoming effective and update “effective date” at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </p>
      </div>
      <div>
        <h3>Contact Us</h3>

        If you have any questions about this Privacy Policy, please contact us by email:
      </div>
      <a href="mailto:info@commercializer.global" target="_blank">info@commercializer.global</a>
    </main>
  </b-container>
  <FooterSection />
</template>

<script setup lang="ts">
import PrivacyPolicy from '@/layouts/partials/PrivacyPolicy.vue'
import Navbar from '@/layouts/partials/Navbar.vue'
import FooterSection from '@/components/FooterSection.vue'

const usesOfData = [
  `0.1. to provide and maintain our Service;`,

  `0.2. to notify you about changes to our Service;`,

  `0.3. to allow you to participate in interactive features of our Service when you choose to do so;`,

  `0.4. to provide customer support;`,

  `0.5. to gather analysis or valuable information so that we can improve our Service;`,

  `0.6. to monitor the usage of our Service;`,

  `0.7. to detect, prevent and address technical issues;`,

  `0.8. to fulfill any other purpose for which you provide it;`,

  `0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you
            and
            us,
            including for billing and collection;`,

  `0.10. to provide you with notices about your account and/or subscription, including expiration and renewal
            notices,
            email instructions, etc.;`,

  `0.11. to provide you with news, special offers, and general information about other goods, services, and
            events
            which we offer that are similar to those that you have already purchased or enquired about unless you have
            opted
            not
            to receive such information;`,

  `0.12. in any other way we may describe when you provide the information;`,

  `0.13. for any other purpose with your consent.`
]

const definitions = [
  `SERVICE means the <a target="_blank" href="https://commercializer.global">https://commercializer.global</a>
            website operated by Commercializer.`,

  `PERSONAL DATA means data about a living individual who can be identified from that data (or from those and
            other
            information either in our possession or likely to come into our possession).`,

  `USAGE DATA is data collected automatically either generated by the use of Service or from the Service
            infrastructure
            itself (for example, the duration of a page visit).`,

  `COOKIES are small files stored on your device (computer or mobile device).`,

  `DATA CONTROLLER means a natural or legal person who (either alone or jointly or in common with other
            persons)
            determines the purposes for which and the manner in which any personal data are, or are to be, processed.
            For
            the
            purpose of this Privacy Policy, we are a Data Controller of your data.`,

  `DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal person who processes the data on behalf of
            the
            Data Controller. We may use the services of various Service Providers in order to process your data more
            effectively.`,

  `DATA SUBJECT is any living individual who is the subject of Personal Data.`,

  `THE USER is the individual using our Service. The User corresponds to the Data Subject, who is the subject
            of
            Personal Data.`
]

const disclosuresOfData: Record<string, string[]> = {
  '0.1. Disclosure for Law Enforcement': [
    `Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law
            or
            in
            response to valid requests by public authorities.`
  ],

  '0.2. Business Transaction': [
    `If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your Personal Data may be
            transferred.`
  ],

  '0.3. Other cases': [
    `We may disclose your information also:`,

    `0.3.1. to our subsidiaries and affiliates;`,

    `0.3.2. to contractors, service providers, and other third parties we use to support our business;`,

    `0.3.3. to fulfill the purpose for which you provide it;`,

    `0.3.4. for the purpose of including your company’s logo on our website;`,

    `0.3.5. for any other purpose disclosed by us when you provide the information;`,

    `0.3.6. with your consent in any other cases;`,

    `0.3.7. if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
            the
            Company, our customers, or others.`
  ],

  '0.4. Disclosure for Google API': [
    `Acquire uses of Google’s API Services to enable the user authorization feature for accessing the Acquire
            platform.
            (i.e. use of your gmail account to add contact to Acquire platform)`,

    `To comply with the Google API Services User Data Policy, including the Limited Use requirements, we
            disclose
            that
            (App’s) use and transfer of information received from Google APIs to any other app will adhere to the
            policy.
            Please
            refer to the Google API Services User Data Policy for more information`
  ]
}

const securities: Record<string, string[]> = {
  '0.1. What personal information do we have about you?, if you make this request, we will return to you:':
    [
      `0.0.1. The categories of personal information we have collected about you.`,

      `0.0.2. The categories of sources from which we collect your personal information.`,

      `0.0.3. The business or commercial purpose for collecting or selling your personal information.`,

      `0.0.4. The categories of third parties with whom we share personal information.`,

      `0.0.5. The specific pieces of personal information we have collected about you.`,

      `0.0.6. A list of categories of personal information that we have sold, along with the category of any other
            company
            we
            sold it to. If we have not sold your personal information, we will inform you of that fact.`,

      `0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the
            category of any other company we shared it with.`,

      `Please note, you are entitled to ask us to provide you with this information up to two times in a rolling
            twelve-month period. When you make this request, the information provided may be limited to the personal
            information
            we collected about you in the previous 12 months.`
    ],
  '0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.':
    [],
  '0.3. To stop selling your personal information. We don’t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a “sale” under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time. If you submit a request to stop selling your personal information, we will stop making such transfers.':
    []
}
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 500 !important;
  font-size: 1.4rem !important;
  margin-block: 1rem !important;
}

h4 {
  font-weight: 400 !important;
  font-size: 1.125rem !important;
}

h5 {
  font-weight: 500 !important;
  font-size: 1rem !important;
}

ul {
  list-style: none;
  margin: 1rem;
  margin-left: 0 !important;
  padding-left: 0 !important;
}
</style>
