# Musa Capital - Community Tools V1
Open Source Tools for Emerging Fund Manager &amp; Angel Syndicates
# Cap Table Data Model

## Introduction

This document describes the data model for the cap table application, outlining various objects and their relationships to provide a clear structure for development and integration.

## Data Model (Objects)

### 1. Stock Legend Template

**Description**: Represents stock legend descriptions and text.

**Fields**:

- Stock legend ID
- Text
- Type
- Use Cases

### 2. Stock Plan

**Description**: Contains details about stock plans including their type and duration.

**Fields**:

- Stock plan ID
- Name
- Type (e.g., ISO, NSO, RSA)
- Duration
- Other relevant attributes

### 3. Valuation

**Description**: Information about a specific valuation event or scenario.

**Fields**:

- Valuation ID
- Date
- Amount
- Valuation type (e.g., 409A, internal)
- Notes

### 4. Vesting Terms

**Description**: Describes terms for the vesting of a security.

**Fields**:

- Vesting term ID
- Start date
- Duration
- Cliff period
- Frequency

### 5. Cap Table

**Description**: A holistic view of the cap table structure.

**Fields**:

- Cap table ID
- Name
- Issuer
- Securities
- Valuations
- Stakeholders

### 6. Stakeholder

**Description**: Contains details about individual or institutional stakeholders.

**Fields**:

- Stakeholder ID
- Name
- Type (e.g., individual, institution)
- Current relationship
- Contact details
- Tax IDs

### 7. Issuer

**Description**: Information about the company whose cap table is described.

**Fields**:

- Issuer ID
- Legal name
- DBA (Doing Business As)
- Formation date
- Country of formation
- Country subdivision of formation
- Tax IDs
- Contact details (Email, Phone, Address)
- Initial shares authorized

