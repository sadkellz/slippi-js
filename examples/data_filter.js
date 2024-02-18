const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }

  try {
    // Parse JSON string to JavaScript array
    const dataArray = JSON.parse(jsonString);

    // Check if the parsed object is an array
    if (!Array.isArray(dataArray)) {
      console.log('Error: JSON does not contain an array');
      return;
    }

    // Array to store filtered bones
    const filteredBonesArray = [];

    // Iterate over each data object and filter the bones
    for (const data of dataArray) {
      if (data.bones && Array.isArray(data.bones)) {
        const filteredBones = data.bones.filter(bone => bone.rotW > 0.8 && bone.useQuat === 0);
        if (filteredBones.length > 0) {
          // Push filtered bones into the array
          filteredBonesArray.push({
            frame: data.frame,
            filteredBones: filteredBones
          });
        }
      }
    }

    // Convert filtered bones array to JSON
    const filteredBonesJson = JSON.stringify(filteredBonesArray, null, 2);

    // Write JSON to file
    const filePath = 'filtered_bones.json';
    fs.writeFileSync(filePath, filteredBonesJson);

    console.log(`Filtered bones saved to ${filePath}`);
  } catch (err) {
    console.log('Error parsing JSON string:', err);
  }
});
