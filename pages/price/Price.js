// import React from 'react'
// import tw from 'twin.macro'
// import styled from 'styled-components'
// import { css } from 'styled-components/macro' //eslint-disable-line
// import {
//   SectionHeading,
//   Subheading as SubheadingBase,
// } from '../../components/Heading'
// import { SectionDescription } from '../../components/Typography'
// import { PrimaryButton as PrimaryButtonBase } from '../../components/Button'
// import {
//   Container as ContainerBase,
//   ContentWithPaddingXl as ContentBase,
// } from '../../components/Layout'
// import { ReactComponent as CheckboxIcon } from '../../img/checkbox-circle.svg'

// const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 px-8`
// const ContentWithPaddingXl = tw(
//   ContentBase
// )`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`
// const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`
// const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`
// const Heading = tw(SectionHeading)`w-full`
// const Description = tw(SectionDescription)`w-full text-gray-300 text-center`

// const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`
// const Plan = styled.div`
//   ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised`}
// `

// const PlanHeader = styled.div`
//   .nameAndFeaturedContainer {
//     ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
//   }
//   .name {
//     ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
//   }
//   .featuredText {
//     ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
//   }
//   .pricingContainer {
//     ${tw`mt-6 flex items-end justify-between`}
//     .currentPrice {
//       ${tw`text-lg font-bold leading-none`}
//       .bigText {
//         ${tw`text-3xl font-bold`}
//       }
//     }
//     .oldPrice {
//       ${tw`text-gray-500 text-lg line-through hidden sm:block`}
//     }
//   }
//   .description {
//     ${tw`mt-8 font-medium text-gray-700 lg:text-sm xl:text-base`}
//   }
// `
// const PlanFeatures = styled.ul`
//   ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
//   .feature {
//     ${tw`flex items-start mt-6 first:mt-0`}
//     .icon {
//       ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
//     }
//     .text {
//       ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
//     }
//   }
// `

// const PlanAction = tw.div`mt-4`
// const ActionButton = styled(PrimaryButtonBase)`
//   ${tw`block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary-500 px-6 py-4 rounded hover:bg-primary-700 focus:shadow-outline focus:outline-none transition-colors duration-300`}
// `

// const WhiteBackgroundOverlay = tw.div`absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 bg-white z-0`

// export default ({
//   subheading = '',
//   heading = 'Affordable Pricing',
//   description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   plans = null,
//   primaryButtonText = 'Create Server',
// }) => {
//   const defaultPlans = [
//     {
//       name: 'Personal',
//       price: ['$9', '.99/month'],
//       oldPrice: '$11.99',
//       description:
//         'Perfect for when you want to host your personal blog or a hobby side project.',
//       features: [
//         '2 Core Xeon CPU',
//         '1 GB RAM',
//         '30 GB SSD',
//         '1 TB Transfer',
//         '99.9% Uptime',
//       ],
//       url: 'https://google.com',
//     },
//     {
//       name: 'Business',
//       price: ['$15', '.99/month'],
//       oldPrice: '$19.99',
//       description:
//         'Perfect for hosting blogs with lots of traffic or heavy development projects',
//       features: [
//         '4 Core Xeon CPU',
//         '2 GB RAM',
//         '100 GB SSD',
//         '3 TB Transfer',
//         '99.9% Uptime',
//         'Free Domain & SSL',
//         'Free DNS Management',
//       ],
//       url: 'https://google.com',
//       featured: 'Most Popular',
//     },
//     {
//       name: 'Enterprise',
//       price: ['$25', '.99/month'],
//       oldPrice: '$29.99',
//       description:
//         'Perfect for hosting production websites & API services with high traffic load',
//       features: [
//         '8 Core Xeon CPU',
//         '8 GB RAM',
//         '300 GB SSD',
//         'Unlimited Transfer',
//         '99.99% Uptime',
//         'Free Domain & SSL',
//         'Free DNS Management',
//         'Free Offsite Backup',
//       ],
//       url: 'https://google.com',
//     },
//   ]

//   if (!plans) plans = defaultPlans

//   return (
//     <Container>
//       <ContentWithPaddingXl>
//         <HeaderContainer>
//           {subheading && <Subheading>{subheading}</Subheading>}
//           <Heading>{heading}</Heading>
//           {description && <Description>{description}</Description>}
//         </HeaderContainer>
//         <PlansContainer>
//           {plans.map((plan, index) => (
//             <Plan key={index} featured={plan.featured}>
//               <PlanHeader>
//                 <span className='nameAndFeaturedContainer'>
//                   <span className='name'>{plan.name}</span>
//                   {plan.featured && (
//                     <span className='featuredText'>{plan.featured}</span>
//                   )}
//                 </span>
//                 <div className='pricingContainer'>
//                   <span className='currentPrice'>
//                     <span className='bigText'>{plan.price[0]}</span>
//                     {plan.price[1]}{' '}
//                   </span>
//                   {plan.oldPrice && (
//                     <span className='oldPrice'>{plan.oldPrice}</span>
//                   )}
//                 </div>
//                 <p className='description'>{plan.description}</p>
//               </PlanHeader>
//               <PlanFeatures>
//                 {plan.features.map((feature, index) => (
//                   <li className='feature' key={index}>
//                     <CheckboxIcon className='icon' />
//                     <span className='text'>{feature}</span>
//                   </li>
//                 ))}
//               </PlanFeatures>
//               <PlanAction>
//                 <ActionButton as='a' href={plan.url}>
//                   {primaryButtonText}
//                 </ActionButton>
//               </PlanAction>
//             </Plan>
//           ))}
//         </PlansContainer>
//       </ContentWithPaddingXl>
//       <WhiteBackgroundOverlay />
//     </Container>
//   )
// }


import React from 'react'

export default function Price() {
  return (
    <div>
      {/* <!-- Start block --> */}
      <section className='bg-white dark:bg-gray-900'>
        <div className='max-w-screen-2xl px-4 py-8 mx-auto lg:py-24 lg:px-1'>
          <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
              Pricing
            </h2>
            <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
              Start creating your page for free, or add one of the plans below
              to unlock additional features and get started.
            </p>
          </div>
          <div className='space-y-8 lg:grid lg:grid-cols-2 xl:grid-cols-4 sm:gap-6 xl:gap-6 lg:space-y-0'>
            {/* <!-- Pricing Card --> */}
            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
              <h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
              <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Best option for personal use & for your next project.
              </p>
              <div className='flex items-baseline justify-center my-8'>
                <span className='mr-2 text-5xl font-extrabold'>$29</span>
                <span className='text-gray-500 dark:text-gray-400'>/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role='list' className='mb-8 space-y-4 text-left'>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Team size:{' '}
                    <span className='font-semibold'>1 developer</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support:{' '}
                    <span className='font-semibold'>6 months</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates:{' '}
                    <span className='font-semibold'>6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
              <h3 className='mb-4 text-2xl font-semibold'>Company</h3>
              <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Relevant for multiple users, extended & premium support.
              </p>
              <div className='flex items-baseline justify-center my-8'>
                <span className='mr-2 text-5xl font-extrabold'>$99</span>
                <span className='text-gray-500 dark:text-gray-400 dark:text-gray-400>'>
                  /month
                </span>
              </div>
              {/* <!-- List --> */}
              <ul role='list' className='mb-8 space-y-4 text-left'>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Team size:{' '}
                    <span className='font-semibold'>10 developers</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support:{' '}
                    <span className='font-semibold'>24 months</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates:{' '}
                    <span className='font-semibold'>24 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
              <h3 className='mb-4 text-2xl font-semibold'>Company</h3>
              <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Relevant for multiple users, extended & premium support.
              </p>
              <div className='flex items-baseline justify-center my-8'>
                <span className='mr-2 text-5xl font-extrabold'>$99</span>
                <span className='text-gray-500 dark:text-gray-400 dark:text-gray-400>'>
                  /month
                </span>
              </div>
              {/* <!-- List --> */}
              <ul role='list' className='mb-8 space-y-4 text-left'>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Team size:{' '}
                    <span className='font-semibold'>10 developers</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support:{' '}
                    <span className='font-semibold'>24 months</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates:{' '}
                    <span className='font-semibold'>24 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
              <h3 className='mb-4 text-2xl font-semibold'>Enterprise</h3>
              <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className='flex items-baseline justify-center my-8'>
                <span className='mr-2 text-5xl font-extrabold'>$499</span>
                <span className='text-gray-500 dark:text-gray-400'>/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role='list' className='mb-8 space-y-4 text-left'>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Team size:{' '}
                    <span className='font-semibold'>100+ developers</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support:{' '}
                    <span className='font-semibold'>36 months</span>
                  </span>
                </li>
                <li className='flex items-center space-x-3'>
                  {/* <!-- Icon --> */}
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates:{' '}
                    <span className='font-semibold'>36 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
    </div>
  )
}

