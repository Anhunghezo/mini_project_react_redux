import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import InputField from 'custom-fields/InputField/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField/RandomPhotoField';
import SelectField from 'custom-fields/SelectField/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  // npm i --save react-select
  const initialValues = {
    title: '',
    categoryId: null,
    photo: '',
  };

  const validationScheme = Yup.object().shape({
    title: Yup.string().required('This field is required!'),

    categoryId: Yup.number().required('This field is required!').nullable(),

    photo: Yup.string().required('This field is required!'),

    // photo: Yup.string().when('categoryId', {
    //   is: 1,
    //   then: Yup.string().required('This field is required!'),
    //   otherwise: Yup.string().notRequired(),
    // })
    //khi categoryId = 1 -> photo is required/ not required when # 1
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={values => console.log('Submit: ', values)}
    >
      {formikProps => {
        //do somethings here...
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched })

        return (
          <Form>
            <FastField
              //props of fastfield
              name="title"
              component={InputField}
              //props of InputField
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            {/* <FormGroup>
              <Label for="titleId">Title</Label>
              <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
            </FormGroup> */}

            <FastField
              name="categoryId"
              component={SelectField}

              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            {/* <FormGroup>
              <Label for="categoryId">Category</Label>
              <Select
                id="categoryId"
                name="categoryId"

                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup> */}

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            {/* <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div><Button type="button" outline color="primary">Random a photo</Button></div>
              <div>
                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful background" />
              </div>
            </FormGroup> */}

            <FormGroup>
              <Button type="submit" color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  );
}

export default PhotoForm;

