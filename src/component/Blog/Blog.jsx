import React from 'react';
import Pdf from 'react-to-pdf';
import { useRef } from 'react';

const Blog = () => {
	const ref = useRef();

    return (
        <div className='flex flex-col justify-center items-center'>

            <Pdf targetRef={ref} filename="document.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf} className="btn my-10">
                        Generate PDF
                    </button>
                )}
            </Pdf>
            <div ref={ref}>{
                <div className='my-10'>
                    <div className='container mx-auto'>
                        <h1 className='text-xl font-semibold text-orange-500'>1.Tell us the differences between uncontrolled and controlled components.</h1>
                        <p className='text-md text-orange-500'>Answer: Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                        <h1 className='text-xl font-semibold text-orange-500'>2.How to validate React props using PropTypes</h1>
                        <p className='text-md text-orange-500'>Answer: App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>
                        <h1 className='text-xl font-semibold text-orange-500'>3.Tell us the difference between nodejs and express js.</h1>
                        <p className='text-md text-orange-500'>Answer: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                        <h1 className='text-xl font-semibold text-orange-500'>4. What is a custom hook, and why will you create a custom hook?</h1>
                        <p className='text-md text-orange-500'>Answer: a custom Hook is a function that starts with the word “use” and may call other Hooks. when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. </p>
                    </div>

                </div>

            }</div>
        </div>


    );
};

export default Blog;