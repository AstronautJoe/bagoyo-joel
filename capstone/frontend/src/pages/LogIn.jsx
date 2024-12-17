import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import * as apiClient from '../api-client';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (!showToast) {
    throw new Error('AppContext is not properly initialized.');
  }

  const mutation = useMutation(apiClient.logIn, {
    onSuccess: async () => {
      // console.log("User logged in")
      // 1. show the toast
      showToast({ message: 'Sign in Successful', type: 'SUCCESS' });
      // This below is important to check validateToken ONCE only
      await queryClient.invalidateQueries('validateToken');
      // 2. navigate to the home page
      navigate('/');
    },
    onError: (error) => {
      // show the toast
      console.error('Login Error:', error);
      showToast({
        message: error?.message || 'A login error occured. Please try again.',
        type: 'ERROR',
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-center text-sm text-gray-500">
            Please login to your account
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
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{' '}
            <Link to="/sign-up" className="text-primary link link-hover">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn
