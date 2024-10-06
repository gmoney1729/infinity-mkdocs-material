# Advanced Settings

### Advanced Settings

Advanced Processing Strategy

**Advanced Processing Strategy**

Frequency:

**Frequency:**

The system default is automatic.

All available frequencies are used, like if available Infinity makes use of triple frequencies.

![Image](./data/icons/note.gif)

The system uses the selected frequencies only for the constellations enabled in the Info & Settings > Data Processing > GNSS. For example to use Galileo E5a E5b E5ab, Galileo must be manually activated. Select Galileo in the data section under satellite systems.

**Info & Settings**

**Data Processing**

**GNSS**

![Image](./data/icons/note.gif)

If multi-frequency is not available the system automatically processes a single frequency solution. For users having the single frequency processing option, only ‘L1/B1/E1” is used by default.

Frequency to use in Iono Minimised:

**Frequency to use in Iono Minimised:**

This setting is active only if you have set solution optimisation to Iono Minimised in the strategy settings.

The system default is automatic. Infinity finds the best combination of frequencies to use in the iono-free computation.

To exclude L2/B2 (GPS, GLONASS and BeiDou) or L5 (GPS) from the iono-free linear combination, select the corresponding options.

![Image](./data/icons/note.gif)

For GPS, a triple frequency iono-free solution can be computed.

Min. Distance for Iono Minimised:

**Min. Distance for Iono Minimised:**

By default an iono minimised solution is only attempted for baselines longer than 15km.

Adapt the value to force the system to compute an iono minimised solution even for shorter baselines.

![Image](./data/icons/note.gif)

If in the settings: Strategy Solution Optimisation is set to Iono Minimised, then the processing engine always attempts a linear combination solution independent of the baseline length.

Possible Ambiguities Fix up to:

**Possible Ambiguities Fix up to:**

The system default is 300km.

Defines the maximum length of a baseline for which the system shall try to resolve ambiguities. For baselines above the limit, a float solution is computed.

If you want to ensure a higher accuracy and reliability you can enter a lower value.

Min. Duration for Float Solution (static):

**Min. Duration for Float Solution (static):**

The system default is 5 min.

Defines the time below which the computation of a float solution for static intervals shall not be allowed. For short observation intervals, a float solution may not be accurate enough. In case ambiguities cannot be resolved, the processing engine computes a code-only solution for intervals below the limit.

Allow Widelane fix:

**Allow Widelane fix:**

By default this setting is active.

It allows for the computed solution possibly being a Widelane fixed solution. This is the equivalent of the xRTK solution on Captivate/SmartWorx Viva RTK rovers and applies mainly with difficult data and on typically short (<50km) baselines.

Analysis Tool

**Analysis Tool**

Process & Analyse Output:

**Process & Analyse Output:**

Establish the type of output for the process & analyse mode. The analysis products are shown in the GNSS results analysis viewer.

Observation residuals can be used to analyse the noise of the solution on the observations domain.

Position residuals help to analyse the noise of the static solution on the positions domain. The position residuals are derived by processing static data in kinematic mode.

Select None to remove the analysis mode option from the GNSS processing ribbon bar.

**None**

Select Observation & Position Residuals to make a complete and deep data analysis.

**Observation & Position Residuals**

Virtual RINEX Download

**Virtual RINEX Download**

From multiple points:

**From multiple points:**

This setting is applicable when you create a VRS (Virtual Reference Station) from multiple intervals having different positions.

Select Create one VRS in the middle when working with raw data collected in a small area (100 metres). Infinity creates one VRS, whose location is the average of the points.

**Create one VRS in the middle**

Select Create one VRS for each point when working with raw data collected in a large area (kilometres). Infinity creates a VRS close to each point.

**Create one VRS for each point**

Name:

**Name:**

Define the name to assign the interval for the VRS.

Sampling Rate:

**Sampling Rate:**

Define the sampling rate for the observation of the VRS.

By default automatically, Infinity uses the sampling rate of the GNSS intervals from where the VRS is generated.

