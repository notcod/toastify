import { toast, Toaster } from '.';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <div>
          <h1>Toastify</h1>
          <button onClick$={() => toast('My first toast')}>Give me a toast</button>
          <button onClick$={() => toast.success('My first toast')}>Give me a success toast</button>
          <button onClick$={() => toast.info('My first toast')}>Give me a info toast</button>
          <button onClick$={() => toast.error('My first toast')}>Give me a error toast</button>
          <button onClick$={() => toast.warning('My first toast')}>Give me a warning toast</button>
          <hr />
          <button
            onClick$={() =>
              toast('My first toast', {
                description: 'This is a description',
                title: 'This is a title',
              })
            }
          >
            Give me a toast
          </button>
        </div>
        <Toaster
          duration={10000}
          richColors={true}
          visibleToasts={9}
          style={{
            cursor: 'pointer',
          }}
          toastOptions={{
            progressBar: true,
          }}
          closeButton={true}
          expand={false}
          position="top-right"
        />
      </body>
    </>
  );
};
