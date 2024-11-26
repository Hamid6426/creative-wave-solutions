import React, { useState, useEffect } from "react";

const BlogArticle = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Understanding React Lifecycle</h1>
      </header>

      <main className="p-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is React Lifecycle?
          </h2>
          <p className="text-gray-700 mb-4">
            React is a powerful JavaScript library used to build modern,
            efficient, and dynamic user interfaces. React follows a
            component-based architecture, where each component goes through a
            lifecycle, consisting of different phases. These phases represent
            the different stages in a component&apos;s existence—from creation
            to removal—and offer methods to interact with a component at each
            stage. Understanding the React component lifecycle is essential to
            manage state, perform side effects, and optimize performance in your
            applications.
          </p>
          <p className="text-gray-700 mb-4">
            React components can either be created as class components or
            function components. In class components, the lifecycle methods
            allow developers to hook into various stages of a component&apos;s
            lifecycle. With the introduction of hooks in React 16.8, function
            components gained access to similar functionality. In this guide, we
            will explore the lifecycle methods for both class components and
            function components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Three Main Phases of React Lifecycle
          </h2>
          <p className="text-gray-700 mb-4">
            The React lifecycle can be broken down into three distinct phases:
            Mounting, Updating, and Unmounting. Let&apos;s take a deeper look at
            each phase and its associated methods.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-800">1. Mounting</h3>
            <p className="text-gray-700">
              The mounting phase occurs when a component is created and inserted
              into the DOM. During this phase, React provides lifecycle methods
              to initialize the component&apos;s state, render the UI, and
              execute code once the component is mounted.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>constructor()</strong>- The constructor is the first
                method called in the lifecycle. It is used to initialize state
                and bind methods to the component instance.
              </li>
              <li>
                <strong>render()</strong>- This is the only required method in a
                class component. It defines the UI of the component and returns
                the JSX that will be rendered to the DOM.
              </li>
              <li>
                <strong>componentDidMount()</strong>- This method is called once
                the component is mounted (i.e., after it is inserted into the
                DOM). It&apos;s ideal for making API calls, setting up event
                listeners, or subscribing to external data sources.
              </li>
            </ul>
            <p className="text-gray-700">
              The mounting phase is essential for setting up initial data and
              UI, as well as performing any one-time operations that are needed
              when the component first appears on the screen.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-800">2. Updating</h3>
            <p className="text-gray-700">
              The updating phase occurs when there are changes to the
              component&apos;s state or props, leading to a re-render of the
              component. This phase ensures that the component stays in sync
              with any changes that occur in the data or external input.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>shouldComponentUpdate()</strong>- This method allows you
                to optimize performance by determining whether the component
                needs to re-render when state or props change. By default, React
                re-renders the component on state or prop changes, but you can
                override this method to prevent unnecessary renders.
              </li>
              <li>
                <strong>render()</strong>- Like during the mounting phase, this
                method is responsible for rendering the updated UI whenever
                state or props change.
              </li>
              <li>
                <strong>getSnapshotBeforeUpdate()</strong>- This method is
                called right before the changes from `render()` are applied to
                the DOM. It allows you to capture information (like scroll
                position) before the update is made. It&apos;s less commonly
                used, but useful for specific scenarios.
              </li>
              <li>
                <strong>componentDidUpdate()</strong>- This method is called
                immediately after the component re-renders. It&apos;s ideal for
                responding to changes that occur as a result of updates, such as
                triggering side effects based on the changes to props or state.
              </li>
            </ul>
            <p className="text-gray-700">
              The updating phase is essential for keeping the UI in sync with
              data changes and for optimizing the performance of your
              application by controlling unnecessary re-renders.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-800">3. Unmounting</h3>
            <p className="text-gray-700">
              The unmounting phase occurs when a component is removed from the
              DOM. This phase provides a lifecycle method to clean up and
              release resources that were allocated during the component&apos;s
              lifecycle.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>componentWillUnmount()</strong>- This method is called
                just before the component is removed from the DOM. It&apos;s
                used for cleanup tasks like clearing timers, canceling network
                requests, or unsubscribing from events.
              </li>
            </ul>
            <p className="text-gray-700">
              The unmounting phase is crucial for preventing memory leaks by
              cleaning up any resources that were allocated during the
              component&apos;s lifecycle.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            React Lifecycle with Hooks
          </h2>
          <p className="text-gray-700 mb-4">
            With the introduction of React Hooks in React 16.8, function
            components were empowered to manage side effects and lifecycle
            behavior, which was previously available only in class components.
            The <code>useEffect</code> hook is a key part of this change,
            offering a way to replicate many of the lifecycle methods, such as:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>
              <strong>componentDidMount()</strong>
              is replaced by <code>useEffect</code> - This runs once, after the
              component is mounted.
            </li>
            <li>
              <strong>componentDidUpdate()</strong>
              is replaced by <code>useEffect</code>- This runs whenever the
              specified dependency changes.
            </li>
            <li>
              <strong>componentWillUnmount()</strong>
              is replaced by the cleanup function in <code>useEffect</code> -
              You can return a function from your <code>useEffect</code>{" "}
              callback to clean up resources when the component is unmounted.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            The <code>useEffect</code> hook provides a powerful way to manage
            side effects, including data fetching, subscriptions, and manual DOM
            manipulations. It runs after every render by default, but you can
            control when it runs based on dependencies, making it a versatile
            tool for function components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 mb-4">
            The React component lifecycle is a critical concept for building
            efficient and maintainable applications. Understanding the lifecycle
            phases—mounting, updating, and unmounting—will help you manage
            state, handle side effects, and optimize your components.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you&apos;re working with class components or function
            components with hooks, React&apos;s lifecycle methods provide
            powerful tools to control the behavior of your components at various
            stages. As you dive deeper into React, mastering these lifecycle
            methods will enable you to build more dynamic, responsive, and
            performant applications.
          </p>
        </section>
      </main>
    </div>
  );
};

export default BlogArticle;
