# Processing Strategy

### Processing Strategy

Solution Type:

**Solution Type:**

Set the solution type the processing engine should output.

- The system default and recommended setting is **Phase Fixed** where the processing engine attempts to fix any ambiguities.
- The computed solution can also be a Widelane fixed solution. This is the equivalent of the xRTK solution on Captivate/SmartWorx Viva RTK rovers and applies mainly on data collected under difficult environment.
- For baselines where the phase fixed solution is not reliable, the solution type reverts to a float solution automatically.
- In case of long baselines and long observation times, the solution type **Float** can be selected. The processing engine then does not try to solve the ambiguities.
- Select **Code** to compute a code only solution when lower accuracy results are sufficient.

Solution Optimisation:

**Solution Optimisation:**

Set how the processing engine considers ionospheric biases.

- The system default and recommended setting is **Automatic**, which allows the processing engine to determine when to compute an ionosphere-free linear combination.
- The input data is evaluated during the processing and considers the effects of the ionosphere. When the processing engine determines the reliability of the solution is higher when using an ionosphere-free linear combination, then this is automatically considered for the solution.
- The processing engine can compute an ionosphere-free linear combination over three frequencies (if L1, L2 and L5) and automatically uses the best combination of frequencies. To change the frequencies used, go to Advanced Settings.
- Set the solution optimisation to **Iono Minimised** to force the processing engine to attempt an ionosphere-free linear combination solution.
- For baselines longer than 15 km or with a noisy ionosphere, the processing engine automatically computes an ionosphere-free linear combination solution. The length of the baseline is set to 15 km by default but can be modified in Advanced Settings.
- Set the solution optimisation to **None** when you do not want the processing engine to consider an ionospheric-free linear combination for the solution.
- When the solution optimisation is set to **None** and a global/regional ionospheric model is available, then the processing engine uses the selected ionospheric model during the processing.

Tropospheric Model:

**Tropospheric Model:**

The system default and recommended setting is Automatic, which uses the VMF (Vienna Mapping Function) with GPT2 (Global Pressure and Temperature - 2) model for baselines shorter than 90 minutes. If the data is longer than 90 minutes, a Computed tropospheric model gets applied.

**Automatic**

**VMF**

**GPT2**

**Computed**

Indeed, when enough observations are provided, the use of a computed tropospheric model, can be more effective than an a-priori model (such as the VMF, Hopfield or Saastamoinen, which are also available in Infinity). A computed tropospheric model is based on the current status of the troposphere. The longer the observation period, the better the estimation of the troposphere model is.

Ionospheric Model:

**Ionospheric Model:**

The system default and recommended setting is Automatic.

**Automatic**

- If you have at least 45 minutes of multi-frequency GNSS raw data collected on the reference station, then the processing engine chooses to compute the ionospheric model (and automatically switches to **Computed**). The computed ionospheric model suits your observations best. If less than 45 minutes of data is available, either the Klobuchar model or no ionospheric model (None) is applied.
- You can also use a global/regional model if available. Ionospheric files (.ion) can be imported through the GNSS manager. If you select this option but no such file is available, then the system switches to use **None** automatically.
- Alternatively, you can use the **Klobuchar** ionospheric model. This is applied if the coefficients are available.
- If for any reason it is not possible to apply the chosen model, no model is chosen, and the processing engine automatically changes to **None**.
- Only choose **None** when you can be sure that ionospheric activity is low.

