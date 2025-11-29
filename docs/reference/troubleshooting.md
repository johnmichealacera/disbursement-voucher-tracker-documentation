---
sidebar_position: 3
title: Troubleshooting Guide
description: Solutions to common issues and problems in the Disbursement Voucher Tracker
tags: [reference, troubleshooting, help]
---

# Troubleshooting Guide

Solutions to common issues you might encounter while using the Disbursement Voucher Tracker.

## Login Problems

### Issue: Can't Log In

**Symptoms**:
- Error message: "Invalid username or password"
- Page won't load after entering credentials
- Redirected back to login page

**Solutions**:

1. **Check Your Credentials**
   - Verify username is correct (case-sensitive)
   - Verify password is correct (case-sensitive)
   - Ensure Caps Lock is not enabled
   - Check for extra spaces before/after username or password

2. **Clear Browser Cache**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: Settings → Privacy → Clear Data
   - Edge: Settings → Privacy → Clear browsing data
   - Try logging in again

3. **Try Different Browser**
   - If using Chrome, try Firefox or Edge
   - If using Firefox, try Chrome or Edge
   - This helps identify browser-specific issues

4. **Check Internet Connection**
   - Verify you have internet access
   - Try accessing other websites
   - Check if your organization's network is working

5. **Contact Administrator**
   - Your account may be inactive
   - Password may need reset
   - Account may have been locked

---

### Issue: "Account is Inactive" Error

**Symptoms**:
- Error message when trying to log in
- Cannot access the system

**Solutions**:

1. **Contact System Administrator**
   - Your account needs to be activated
   - Administrator can activate your account
   - May need to verify your role and permissions

2. **Check with Your Supervisor**
   - Confirm your account should be active
   - Verify your role assignment
   - Ensure you're authorized to use the system

---

## Permission Errors

### Issue: "Permission Denied" or "Access Denied"

**Symptoms**:
- Error message when trying to perform an action
- Button is disabled or not visible
- Cannot access certain pages

**Solutions**:

1. **Verify Your Role**
   - Check your user profile to confirm your role
   - Ensure you have the correct role for the action
   - Contact administrator if role is incorrect

2. **Check Action Requirements**
   - Some actions require specific voucher status
   - Verify voucher is at the correct stage
   - Check if previous stages are complete

3. **Contact Administrator**
   - Your role may need permission adjustment
   - System permissions may need updating
   - Verify you're authorized for the action

---

## Button Not Working

### Issue: Button is Disabled (Grayed Out)

**Symptoms**:
- Button appears but cannot be clicked
- Button is grayed out
- No response when clicking

**Solutions**:

1. **Check Voucher Status**
   - Verify voucher is at your stage
   - Check approval progress bar
   - Ensure previous stages are complete

2. **Complete Previous Stages**
   - If you see "Received" button, click it first
   - Complete RECEIVED before REVIEWED
   - Complete REVIEWED before FORWARDED

3. **Check for "Awaiting Previous Review"**
   - Voucher may not have reached your stage yet
   - Wait for previous department to complete
   - Check notifications for updates

4. **Refresh the Page**
   - Press F5 or Ctrl+R to refresh
   - Button state may update after refresh
   - Try again after page reloads

---

### Issue: Button Click Does Nothing

**Symptoms**:
- Button appears enabled
- Clicking has no effect
- No error message appears

**Solutions**:

1. **Check Browser Console**
   - Press F12 to open developer tools
   - Look for error messages in Console tab
   - Note any errors and contact administrator

2. **Try Different Browser**
   - Browser may have compatibility issues
   - Try Chrome, Firefox, or Edge
   - See if issue persists

3. **Clear Browser Cache**
   - Old cached files may cause issues
   - Clear cache and cookies
   - Try again

4. **Disable Browser Extensions**
   - Ad blockers or extensions may interfere
   - Try disabling extensions temporarily
   - Test if button works

5. **Contact Administrator**
   - May be a system issue
   - Provide details about what you're trying to do
   - Include browser and error information

---

## Missing Notifications

### Issue: Not Receiving Notifications

**Symptoms**:
- Notification bell shows no new notifications
- Expected notifications don't appear
- Badge count is zero

**Solutions**:

1. **Wait for Auto-Refresh**
   - Notifications refresh every 30 seconds
   - Wait a moment and check again
   - Badge count should update automatically

2. **Manually Refresh**
   - Click the notification bell
   - Close and reopen the notification panel
   - Refresh the entire page (F5)

3. **Check Notification Settings**
   - Verify browser allows notifications
   - Check browser notification permissions
   - Ensure notifications aren't blocked

4. **Verify Voucher Status**
   - Check if voucher is actually at your stage
   - Verify you're the correct reviewer
   - Check approval progress bar

5. **Check Other Notifications**
   - See if other notifications are working
   - Verify notification system is functioning
   - Contact administrator if system-wide issue

---

### Issue: Notification Bell Not Showing

**Symptoms**:
- Notification bell icon is missing
- Cannot find notification area

**Solutions**:

1. **Check Navigation Bar**
   - Notification bell is in top-right navigation
   - Look for bell icon (🔔)
   - May be hidden on small screens

2. **Check Browser Zoom**
   - Zoom level may hide elements
   - Reset zoom to 100% (Ctrl+0)
   - Check if bell appears

3. **Try Different Screen Size**
   - Resize browser window
   - Check if bell appears
   - May be responsive design issue

4. **Contact Administrator**
   - May be a configuration issue
   - Notification feature may be disabled
   - Verify with administrator

---

## Progress Bar Not Updating

### Issue: Progress Bar Shows Wrong Information

**Symptoms**:
- Progress bar doesn't reflect current status
- Stages show as incomplete when they're done
- Percentage is incorrect

**Solutions**:

1. **Refresh the Page**
   - Progress updates when page loads
   - Press F5 or Ctrl+R
   - Check if progress updates

2. **Check Activity Log**
   - Verify actual actions taken
   - Compare with progress bar
   - See if there's a discrepancy

3. **Wait a Moment**
   - Progress may update after a delay
   - System may be processing
   - Check again in a few seconds

4. **Clear Browser Cache**
   - Cached data may show old progress
   - Clear cache and reload
   - Progress should update

5. **Contact Administrator**
   - May be a system issue
   - Progress calculation may need fixing
   - Report the discrepancy

---

## Data Not Loading

### Issue: Voucher List Won't Load

**Symptoms**:
- Page shows "Loading..." indefinitely
- List is empty when it shouldn't be
- Error message about data loading

**Solutions**:

1. **Check Internet Connection**
   - Verify you have internet access
   - Check connection stability
   - Try accessing other websites

2. **Refresh the Page**
   - Press F5 or Ctrl+R
   - Wait for page to reload
   - Check if data loads

3. **Check Filters**
   - Applied filters may show no results
   - Clear all filters
   - Try searching without filters

4. **Try Different Browser**
   - Browser may have loading issues
   - Try Chrome, Firefox, or Edge
   - See if data loads

5. **Clear Browser Cache**
   - Cached data may be corrupted
   - Clear cache and cookies
   - Reload page

6. **Contact Administrator**
   - May be a server issue
   - Database connection problem
   - System maintenance in progress

---

### Issue: Voucher Details Won't Load

**Symptoms**:
- Clicking voucher shows loading spinner
- Details page is blank
- Error message when opening voucher

**Solutions**:

1. **Refresh the Page**
   - Press F5 or Ctrl+R
   - Try opening voucher again
   - Wait for details to load

2. **Check Voucher Exists**
   - Verify voucher ID is correct
   - Voucher may have been deleted
   - Check if you have permission to view

3. **Try Different Browser**
   - Browser compatibility issue
   - Try alternative browser
   - See if details load

4. **Clear Browser Cache**
   - Cached data may be corrupted
   - Clear cache
   - Try again

5. **Contact Administrator**
   - May be a system issue
   - Voucher data may be corrupted
   - Report the problem

---

## Workflow Issues

### Issue: Voucher Stuck at a Stage

**Symptoms**:
- Voucher hasn't progressed in days
- Current reviewer hasn't acted
- Workflow seems halted

**Solutions**:

1. **Check Activity Log**
   - See last action taken
   - Identify which stage is stuck
   - Note when last action occurred

2. **Contact Current Reviewer**
   - Reach out to department at current stage
   - Ask about review status
   - Verify if reviewer is available

3. **Check Reviewer Availability**
   - Reviewer may be on leave
   - Department may be short-staffed
   - Contact department supervisor

4. **Contact Administrator**
   - Administrator can check system status
   - May need to escalate
   - Can verify workflow status

---

### Issue: Can't See Next Button

**Symptoms**:
- Expected button is not visible
- Button is disabled
- "Awaiting Previous Review" message

**Solutions**:

1. **Check Approval Progress**
   - Verify previous stages are complete
   - Check if voucher is at your stage
   - Review workflow sequence

2. **Complete Previous Stages**
   - If you're a reviewer, complete all three stages
   - Ensure RECEIVED → REVIEWED → FORWARDED
   - Wait for system to process

3. **Wait for Previous Stage**
   - If voucher isn't at your stage, wait
   - Previous department must complete first
   - Check notifications for updates

4. **Refresh the Page**
   - Button state may update
   - Press F5 to refresh
   - Check if button appears

5. **Contact Administrator**
   - May be a workflow configuration issue
   - System may need adjustment
   - Report the problem

---

## Form Issues

### Issue: Can't Submit Voucher Form

**Symptoms**:
- Submit button doesn't work
- Form shows validation errors
- Can't save draft

**Solutions**:

1. **Check Required Fields**
   - Ensure all required fields are filled
   - Look for red error indicators
   - Fix validation errors

2. **Check Field Validation**
   - Amount must be greater than zero
   - Payee must be selected
   - Particulars cannot be empty
   - Fix any validation errors

3. **Try Saving as Draft First**
   - Save draft to preserve work
   - Fix any issues
   - Submit after fixing

4. **Clear Form and Start Over**
   - If form is corrupted, refresh page
   - Re-enter information
   - Try submitting again

5. **Check Browser Console**
   - Press F12 for developer tools
   - Look for JavaScript errors
   - Note errors and contact administrator

---

### Issue: Dropdown Won't Open

**Symptoms**:
- Payee/Item/Tag dropdown doesn't open
- Can't select from directory
- Dropdown appears but is empty

**Solutions**:

1. **Click in the Field**
   - Click directly in the input field
   - Start typing to trigger search
   - Dropdown should appear

2. **Type to Search**
   - Type payee/item/tag name
   - Results should filter
   - Select from filtered results

3. **Refresh the Page**
   - Page may need reload
   - Press F5
   - Try dropdown again

4. **Clear Browser Cache**
   - Cached JavaScript may be old
   - Clear cache
   - Reload page

5. **Contact Administrator**
   - Directory may be empty
   - System configuration issue
   - Report the problem

---

## Performance Issues

### Issue: System is Slow

**Symptoms**:
- Pages take long to load
- Actions are delayed
- System feels unresponsive

**Solutions**:

1. **Check Internet Connection**
   - Slow connection causes delays
   - Test connection speed
   - Try different network if available

2. **Close Other Tabs/Programs**
   - Too many browser tabs slow things down
   - Close unnecessary tabs
   - Close other programs using internet

3. **Clear Browser Cache**
   - Accumulated cache can slow browser
   - Clear cache and cookies
   - Restart browser

4. **Try Different Browser**
   - Current browser may be slow
   - Try Chrome, Firefox, or Edge
   - See if performance improves

5. **Check System Load**
   - Many users may slow system
   - Try during off-peak hours
   - Contact administrator about system load

---

## Still Need Help?

If your issue isn't covered here:

1. **Check the FAQ**: [Frequently Asked Questions](./faq.md)
2. **Review Role Tutorials**: Check tutorials for your specific role
3. **Contact System Administrator**: For issues not resolved by troubleshooting
4. **Document the Issue**: Note what you were doing, error messages, and steps to reproduce

:::warning Report Issues
When contacting support, provide:
- What you were trying to do
- Error messages (if any)
- Steps to reproduce the issue
- Browser and operating system
- Screenshots (if helpful)
:::

:::info System Maintenance
If the system is completely unavailable, it may be undergoing maintenance. Check with your administrator for scheduled maintenance windows.
:::

