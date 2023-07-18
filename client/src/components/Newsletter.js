import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <form class="form">
          <span class="title">Subscribe to our newsletter.</span>
          <p class="description">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>
          <div>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email-address"
            ></input>
            <button type="submit">Subscribe</button>
          </div>
        </form>
    </div>
  )
}

export default Newsletter
