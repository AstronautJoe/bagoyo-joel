import { useRef, React } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import * as apiClient from '../api-client';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = useRef({}); // To access the elements
  password.current = watch('password', '');

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      // console.log("User logged in")
      // 1. show the toast
      showToast({ message: 'Registration Successful', type: 'SUCCESS' });
      // This below is important to check validateToken ONCE only
      await queryClient.invalidateQueries('validateToken');
      // 2. navigate to the home page
      navigate('/');
    },
    onError: (error) => {
      // show the toast
      showToast({ message: error.message, type: 'ERROR' });
    },
  });

  const onSubmit = handleSubmit((data) => {
    // Add the additional/hidden field data
    const finalData = {
      ...data,
      role: 'user', // Add your custom field here
    };
    mutation.mutate(finalData);
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <p className="text-center text-sm text-gray-500">
            Let&apos;s get you a new account
          </p>
          <form onSubmit={onSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Display Name</span>
              </label>
              <input
                type="text"
                placeholder="What would you like to be known as?"
                className="input input-bordered w-full"
                {...register('displayName', {
                  required: 'This field is required',
                })}
              />
              {errors.displayName && (
                <span className="text-red-500">
                  {errors.displayName.message}
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                {...register('email', { required: 'This field is required' })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your desired password"
                className="input input-bordered w-full"
                {...register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password again"
                className="input input-bordered w-full"
                {...register('confirmPassword', {
                  required: 'This field is required',
                  validate: (value) => {
                    return (
                      value === password.current || 'The passwords do not match'
                    );
                  },
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/log-in" className="text-primary link link-hover">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
