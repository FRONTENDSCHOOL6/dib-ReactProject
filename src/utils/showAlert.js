import toast from "react-hot-toast";

export const showSuccessAlert = (message, icon) => {
  toast.success(message, {
     position: 'top-center',
     duration: 3000,
     icon,
     ariaProps: {
       role: 'status',
       'aria-live': 'polite',
     },
   });
};
export const showErrorAlert = (message, icon) => {
  toast.error(message, {
     position: 'top-center',
     duration: 3000,
     icon,
     ariaProps: {
       role: 'status',
       'aria-live': 'polite',
     },
   });
};
