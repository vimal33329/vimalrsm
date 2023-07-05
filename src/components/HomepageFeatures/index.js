import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pay Stack Overview',
    Svg: require('@site/static/img/main_pay.svg').default,
    description: (
      <>
paystack is a service that allows you to automate the payment of your bills, such as credit card bills, utility bills, and loan payments. By setting up an automatic payment, you can ensure that your bills are paid on time each month, without having to worry about missing a payment deadline.

If you set up an auto monthly bill payment based on your salary date, the payment will be automatically deducted from your account on or after your salary date each month. This can help you to ensure that you have enough funds in your account to cover your bills and avoid late payments.

If you do miss a payment deadline, you may be subject to late fees or other penalties, depending on the terms and conditions of your agreement with the provider. For example, credit card companies may charge a late fee if you miss a payment or don't pay the full amount due, while utility companies may charge a fee for late or non-payment of your bill. These fees are typically outlined in the terms and conditions of your agreement with the provider.

On the other hand, if you settle your bills before the due date, you may be entitled to receive an interest amount from the provider. This is because the provider may have been holding onto your funds until the due date, and if you settle your bills early, they are no longer able to earn interest on your funds. However, not all providers offer interest on early payments, and the interest rate may vary depending on the provider.

      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg  role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
