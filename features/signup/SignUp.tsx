import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useAuthentication } from '../../auth/AuthenticationProvider';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { signUp } from '../../network/features/signup';
import { convertQueryToString, logIntoMtgCb } from '../login/Login';

const SignUpWrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SignUpIcon = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
}));

const SignUpForm = styled(Form)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const SubmitButtonWrapper = styled.div(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required').email('Valid email is required'),
  password: Yup.string().min(8, 'Password must be at least eight characters long').required('Password is required'),
  passwordConfirmation: Yup.string()
    .min(8, 'Password confirmation must be at least eight characters long')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const signUpForMtgCb = async (username, email, password, passwordConfirmation) => {
  const response = {
    data: null,
    error: null,
  };

  const result = await signUp(username, email, password, passwordConfirmation);

  const signUpWasSuccessful = result?.data?.data?.signUp?.item?.id != null;
  if (signUpWasSuccessful) {
    response.data = {
      username: result?.data?.data?.signUp?.item?.username ?? 'Unknown',
      id: result?.data?.data?.signUp?.item?.id,
    };
  } else {
    const errorMessage = result?.data?.errors?.[0]?.message;
    const isDuplicateUsername = errorMessage?.match(/Username already exists/);
    const isApiFailure = result?.status !== 200;
    if (isDuplicateUsername) {
      response.error = 'That username is already in use. Please choose another.';
    } else if (isApiFailure) {
      response.error = 'There was a problem trying to sign up. Please try again in a moment.';
    } else {
      response.error = 'There was an unknown problem. Please try again.';
    }
  }

  return response;
};

export const SignUp: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, isCheckingAuth, setUser } = useAuthentication();

  if (isCheckingAuth) {
    return <></>;
  }

  if (isAuthenticated) {
    router.push('/');
    return <></>;
  }

  return (
    <SignUpWrapper>
      <SignUpIcon>
        <SentimentVerySatisfied />
      </SignUpIcon>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>This form doesnt work yet</span>
      </div>
      <Formik
        initialValues={{ username: '', email: '', password: '', passwordConfirmation: '' }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setSubmitting(true);
          setStatus(null);
          const result = await signUpForMtgCb(values.username, values.email, values.password, values.passwordConfirmation);
          setStatus(result.error);
          const signUpWasSuccessful = result.data?.id;
          if (signUpWasSuccessful) {
            const loginResult = await logIntoMtgCb(values.username, values.password);
            setStatus(loginResult.error);
            const loginWasSuccessful = loginResult.data?.id;
            if (loginWasSuccessful) {
              setUser(loginResult.data);
              const destination = convertQueryToString(router.query?.destination) || '/';
              router.push(destination);
            }
          }
        }}
      >
        {({ isSubmitting, errors, touched, status }) => (
          <SignUpForm noValidate id="signup-form">
            <Field id="username" name="username">
              {({ field }) => (
                <TextField
                  disabled
                  label="Username"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="nickname"
                  autoFocus
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username ? errors.username : ''}
                  inputProps={{ maxLength: 255 }}
                  {...field}
                />
              )}
            </Field>

            <Field id="email" name="email">
              {({ field }) => (
                <TextField
                  disabled
                  label="Email"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email ? errors.email : ''}
                  inputProps={{ maxLength: 255 }}
                  {...field}
                />
              )}
            </Field>

            <Field name="password" id="password">
              {({ field }) => (
                <TextField
                  disabled
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="new-password"
                  type="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password ? errors.password : ''}
                  inputProps={{ maxLength: 255 }}
                  {...field}
                />
              )}
            </Field>

            <Field name="passwordConfirmation" id="passwordConfirmation">
              {({ field }) => (
                <TextField
                  disabled
                  label="Confirm Password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="new-password"
                  type="password"
                  error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                  helperText={touched.passwordConfirmation ? errors.passwordConfirmation : ''}
                  inputProps={{ maxLength: 255 }}
                  {...field}
                />
              )}
            </Field>

            <Box>
              <FormHelperText error={Boolean(status)}>{status}</FormHelperText>
            </Box>

            <SubmitButtonWrapper>
              <Button disabled type="submit" fullWidth variant="contained" color="primary" isSubmitting={isSubmitting}>
                Sign Up
              </Button>
            </SubmitButtonWrapper>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </SignUpForm>
        )}
      </Formik>
    </SignUpWrapper>
  );
};
