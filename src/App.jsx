@@ .. @@
   {
-    path: '/edit',
-    element: (
-      <div>
-        <Navbar />
-        <Home />
-      </div>
-    ),
-    errorElement: <ErrorPage />,
-  },
-  {
     path: '*',
     element: <ErrorPage />,
   },
 ]);