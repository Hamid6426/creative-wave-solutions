import React, { useState, useEffect } from 'react';

const BlogArticle = () => {
    return (
        <div className="bg-gray-50 font-sans">
            <header className="bg-blue-600 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">Getting Started with Tailwind CSS</h1>
            </header>

            <main className="p-8">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Tailwind CSS and why do we use it?</h2>
                    <p className="text-gray-700 mb-4">
                        React follows a component-based architecture where each component goes through different lifecycle phases. These phases—Mounting, Updating, and Unmounting—help you manage state, perform side effects, and optimize performance. Understanding the React lifecycle is crucial for managing components behavior effectively.
                    </p>
                    <p className="text-gray-700 mb-4">
                        React components can either be class-based or function-based. The introduction of hooks in React 16.8 has enabled function components to utilize lifecycle-like functionality, making it easier to manage side effects and optimize performance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Main Phases of React Lifecycle</h2>
                    <p className="text-gray-700 mb-4">
                        React’s lifecycle can be divided into three primary phases:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
                        <h3 className="text-xl font-bold text-gray-800">1. Mounting</h3>
                        <p className="text-gray-700">
                            The mounting phase happens when a component is created and inserted into the DOM. This phase includes methods like <code>constructor()</code>, <code>render()</code>, and <code>componentDidMount()</code> for initialization and performing one-time operations.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
                        <h3 className="text-xl font-bold text-gray-800">2. Updating</h3>
                        <p className="text-gray-700">
                            The updating phase occurs when state or props change, causing the component to re-render. Methods like <code>shouldComponentUpdate()</code> and <code>componentDidUpdate()</code> help optimize performance and respond to updates.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
                        <h3 className="text-xl font-bold text-gray-800">3. Unmounting</h3>
                        <p className="text-gray-700">
                            The unmounting phase occurs when a component is removed from the DOM. The <code>componentWillUnmount()</code> method allows cleanup tasks like clearing timers or canceling network requests.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Lifecycle with Hooks</h2>
                    <p className="text-gray-700 mb-4">
                        With React hooks, function components can replicate lifecycle methods through <code>useEffect</code>. This hook handles tasks like component mount, update, and cleanup, providing the same functionality as class-based methods.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li><strong>componentDidMount()</strong> is replaced by <code>useEffect</code></li>
                        <li><strong>componentDidUpdate()</strong> is replaced by <code>useEffect</code></li>
                        <li><strong>componentWillUnmount()</strong> is handled by the cleanup function in <code>useEffect</code></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
                    <p className="text-gray-700 mb-4">
                        React’s lifecycle is essential for managing component behavior. By understanding the phases—Mounting, Updating, and Unmounting—you can optimize performance and handle side effects effectively. With hooks, function components now have the same lifecycle capabilities as class components, making React development more efficient.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default BlogArticle;
