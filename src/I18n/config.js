import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
       en: {
           translation: {
               id: "ID",
               no: "No",
               yes: "Yes",
               name: "Name",
               logo: "LOGO",
               users: "Users",
               email: "Email",
               posts: "Posts",
               title: "Title",
               login: 'Log in',
               layout: 'Layout',
               logout: 'Log Out',
               appName: 'Welcome Back!',
               singIn: "Log in to your account",
               body: "Description",
               goBack: 'Go Back home',
               actions: "Actions",
               addPost: "Create post",
               editPost: "Edit post",
               removePost: "Remove post",
               addUser: "Create user",
               editUser: "Edit user",
               removeUser: "Remove user",
               notFound: {
                   title: 'OOPS! Page Not Found',
                   desc: 'We are sorry, but the page you requested was not found',
               },
               auth: {
                   save: "Save",
                   wait: "Wait...",
                   submit: "Submit",
                   username: "Username",
                   password: "Password"
               },
               messages: {
                   delete_user_confirm: "Are you sure to delete this user?",
                   user_deleted: "User deleted successfully",
                   user_updated: "User updated successfully",
                   user_created: "User created successfully",
                   delete_post_confirm: "Are you sure to delete this post?",
                   post_deleted: "Post deleted successfully",
                   post_updated: "Post updated successfully",
                   post_created: "Post created successfully",
               },
               error: {
                   err_internal: 'Internal server error',
                   something_wrong: 'Something went wrong',
               },
               validation: {
                   required: "This field is Required!"
               }
           }
       }
    },
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
