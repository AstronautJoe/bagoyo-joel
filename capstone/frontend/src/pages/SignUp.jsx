import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import * as apiClient from '../api-client';
import { useMutation, useQueryClient } from 'react-query';

const SignUp = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const mutation = useMutation(apiClient.logIn, {
    onSuccess: async () => {
      // console.log("User logged in")
      // 1. show the toast
      showToast({ message: 'Sign Up Successful', type: 'SUCCESS' });
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
    mutation.mutate(data);
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
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

              {/* Forgot Password is disabled for now */}
              {/* <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-sm text-gray-500"
                >
                  Forgot password?
                </a>
              </label> */}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          {/* <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            Continue with Google
          </button> */}

          <p className="text-center text-sm mt-4">
            Don’t have an account?{' '}
            <a href="#" className="text-primary link link-hover">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
