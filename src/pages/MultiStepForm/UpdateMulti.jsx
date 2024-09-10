import React, { useEffect, useState } from "react";
import { Button, Container, Grid, TextField, Input } from "@mui/material";
import Cookies from "js-cookie";

const Updatemultistep = () => {
  const [formData, setFormData] = useState({
    UserDetails: {
      email: "",
      mobileNumber: "",
    },
    OrganizationDetails: {
      providerName: "",
      registeredAdd: "",
      storeEmail: "",
      mobileNo: "",
      PANNo: "",
      GSTIN: "",
      FSSAINo: "",
      address: null,
      idProof: null,
      pan: null,
      gst: null,
    },
    BankDetails: {
      accountHolderName: "",
      accountNo: "",
      bankName: "",
      branchName: "",
      ifscCode: "",
      cancelledChequeURL: null,
    },
  });

  useEffect(() => {
    const token = Cookies.get("token");
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/dashboard/getAdminProfile`,
          {
            method: "GET",
            headers: {
              authorization: token,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await res.json();
        console.log("data", data);

        setFormData((prevState) => ({
          ...prevState,
          userDetail: {
            ...prevState.UserDetails,
            // email: data.data.UserDetails.email || "",
            email:data.data.userDetail.email || "",
            mobileNumber: data.data.UserDetails.mobileNumber || "",
          },
          OrganizationDetails: {
            ...prevState.OrganizationDetails,
            providerName: data.data.OrganizationDetails.providerName || "",
            registeredAdd: data.data.OrganizationDetails.registeredAdd || "",
            storeEmail: data.data.OrganizationDetails.storeEmail || "",
            mobileNo: data.data.OrganizationDetails.mobileNo || "",
            PANNo: data.data.OrganizationDetails.PANNo || "",
            GSTIN: data.data.OrganizationDetails.GSTIN || "",
            FSSAINo: data.data.OrganizationDetails.FSSAINo || "",
          },
          BankDetails: {
            ...prevState.BankDetails,
            accountHolderName: data.data.BankDetails.accHolderName || "",
            accountNo: data.data.BankDetails.accNo || "",
            bankName: data.data.BankDetails.bankName || "",
            branchName: data.data.BankDetails.branchName || "",
            ifscCode: data.data.BankDetails.ifscCode || "",
          },
        }));
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Handling file inputs
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      const [section, field] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
    const token = Cookies.get("token");

    const formDataForSubmit = new FormData();
    // Adding all form fields to FormData for multipart/form-data
    Object.entries(formData).forEach(([section, fields]) => {
      Object.entries(fields).forEach(([field, value]) => {
        if (value !== null) {
          formDataForSubmit.append(`${section}.${field}`, value);
        }
      });
    });

    try {
      const res = await fetch(
        `http://localhost:8080/dashboard/adminProfileUpdate`,
        {
          method: "PUT",
          headers: {
            authorization: token,
          },
          body: formDataForSubmit,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update profile data");
      }

      const data = await res.json();
      console.log("Profile updated successfully:", data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          {/* Personal Information */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email"
              name="UserDetails.email"
              value={formData.UserDetails.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Mobile Number"
              name="UserDetails.mobileNumber"
              value={formData.UserDetails.mobileNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Organization/KYC Information */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Provider Name"
              name="OrganizationDetails.providerName"
              value={formData.OrganizationDetails.providerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Registered Address"
              name="OrganizationDetails.registeredAdd"
              value={formData.OrganizationDetails.registeredAdd}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Store Email"
              name="OrganizationDetails.storeEmail"
              value={formData.OrganizationDetails.storeEmail}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Mobile Number"
              name="OrganizationDetails.mobileNo"
              value={formData.OrganizationDetails.mobileNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="PAN Number"
              name="OrganizationDetails.PANNo"
              value={formData.OrganizationDetails.PANNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="GSTIN"
              name="OrganizationDetails.GSTIN"
              value={formData.OrganizationDetails.GSTIN}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="FSSAI Number"
              name="OrganizationDetails.FSSAINo"
              value={formData.OrganizationDetails.FSSAINo}
              onChange={handleChange}
            />
          </Grid>

          {/* File Uploads */}
          <Grid item xs={12} sm={6}>
            <Input
              type="file"
              name="OrganizationDetails.address"
              onChange={handleChange}
              inputProps={{ accept: ".pdf" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type="file"
              name="OrganizationDetails.idProof"
              onChange={handleChange}
              inputProps={{ accept: ".pdf" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type="file"
              name="OrganizationDetails.pan"
              onChange={handleChange}
              inputProps={{ accept: ".pdf" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type="file"
              name="OrganizationDetails.gst"
              onChange={handleChange}
              inputProps={{ accept: ".pdf" }}
            />
          </Grid>

          {/* Bank Details */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Account Holder Name"
              name="BankDetails.accountHolderName"
              value={formData.BankDetails.accountHolderName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Account Number"
              name="BankDetails.accountNo"
              value={formData.BankDetails.accountNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Bank Name"
              name="BankDetails.bankName"
              value={formData.BankDetails.bankName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Branch Name"
              name="BankDetails.branchName"
              value={formData.BankDetails.branchName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="IFSC Code"
              name="BankDetails.ifscCode"
              value={formData.BankDetails.ifscCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type="file"
              name="BankDetails.cancelledChequeURL"
              onChange={handleChange}
              inputProps={{ accept: ".pdf" }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Updatemultistep;
