<a name="readme-top"></a>
![PayPal Developer Cover](https://github.com/paypaldev/.github/blob/main/pp-cover.png)

<div align="center">
  <a href="https://twitter.com/paypaldev" target="_blank">
    <img alt="Twitter: PayPal Developer" src="https://img.shields.io/twitter/follow/paypaldev?style=social" />
  </a>
  <br />
  <a href="https://twitter.com/paypaldev" target="_blank">Twitter</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://www.paypal.com/us/home" target="_blank">PayPal</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://developer.paypal.com/home" target="_blank">Docs</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://github.com/paypaldev" target="_blank">Code Samples</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://dev.to/paypaldeveloper" target="_blank">Blog</a>
  <br />
  <hr />
</div>

# PayPal-React-Donate-Sample

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

This sample app shows how to add PayPal donations to your React application using the [react-paypal-js npm](https://www.npmjs.com/package/@paypal/react-paypal-js) package.

Sample code to render donation buttons can be found in the [`react-paypal-js` GitHub repository](https://github.com/paypal/react-paypal-js) and the [interactive documentation site](https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--donate).

<!-- GETTING STARTED -->

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/paypaldev/PayPal-React-Donate-Sample.git
   ```

2. Install dependencies

   ```sh
   yarn
   ```

   or

   ```sh
   yarn install
   ```

3. Start a local development server
   ```sh
   yarn run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![Donate to Kitty's house](src/assets/donation-form.png)
In this example, we are building a donation form for Kitty's House, a fictional cat rescue organization. The form allows the donor to choose from three donation amounts or enter a custom donation amount.

Once a donation button is clicked, the user will follow the standard checkout flow from the PayPal JavaScript SDK.

On approval, for demonstration purposes, the app will alert with a message that the donation was completed.

To fully test the donation flow, you'll need to have access to sandbox account credentials. If you have a PayPal developer account personal and business sandbox accounts were created when your registered.

See our developer site to learn [how to set up a sandbox account](https://developer.paypal.com/api/rest/sandbox/accounts/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## PayPal Developer Community

The PayPal Developer community helps you build your career, while also improving PayPal products and the developer experience. You’ll be able to contribute code and documentation, meet new people and learn from the open source community.

- Website: [developer.paypal.com](https://developer.paypal.com)
- Twitter: [@paypaldev](https://twitter.com/paypaldev)
- Github: [@paypal](https://github.com/paypal)
