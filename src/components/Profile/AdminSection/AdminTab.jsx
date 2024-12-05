import { useState, useEffect } from "react";
import { Button, FullInput } from "../../Reusables";
import api from "../../../api";

const AdminTab = () => {
  const [allStaffs, setAllStaffs] = useState([]);
  const [editingStaff, setEditingStaff] = useState(null); // Tracks the staff being edited
  const [staffInfo, setStaffInfo] = useState({
    email: "",
    permission: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await api.get("company/all-staffs");
        setAllStaffs(response.data.data);
      } catch (error) {
        console.error("Error fetching staff list:", error);
      }
    };
    fetchStaffs();
  }, []);

  const handleDeleteStaff = async (staffId) => {
    try {
        console.log(staffId)
      const response = await api.delete(`company/delete-staff/${staffId}`);
      console.log(response)
      setAllStaffs((prev) => prev.filter((staff) => staff.id !== staffId)); // Remove deleted staff from the list
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const handleEditStaff = (staff) => {
    setEditingStaff(staff);
    setStaffInfo({ email: staff.email, permission: staff.permission });
    setModalOpen(true); // Open modal for editing
  };
  const handleCancel = ()=>{
    setModalOpen(false);
    setStaffInfo({ email: "", permission: "" });
  }

  const handleUpdateStaff = async (e) => {
    e.preventDefault();
    try {
        const updatingstaff = {...staffInfo, id:editingStaff.id}
      const response = await api.put(`company/update-staff`, updatingstaff);
      console.log("Staff updated successfully:", response.data);

      // Refresh the staff list and close the modal
      const updatedStaffList = await api.get("company/all-staffs");
      setAllStaffs(updatedStaffList.data.data);
      setEditingStaff(null);
      setStaffInfo({ email: "", permission: "" });
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating staff:", error);
    }
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("company/add-staff", staffInfo);
      console.log("Staff added successfully:", response.data);

      // Refresh staff list
      const updatedStaffList = await api.get("company/all-staffs");
      setAllStaffs(updatedStaffList.data.data);

      // Reset form
      setStaffInfo({ email: "", permission: "" });
    } catch (error) {
      console.error("Error adding staff:", error);
    }
  };

  return (
    <div className="flex flex-col w-full px-3 items-center overflow-y-auto">
      <div className="bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full">
        {/* Add Staff Form */}
        <div className="w-full">
          <h1 className="font-bold text-3xl">Add Staff</h1>
          <form onSubmit={handleAddStaff}>
            <div className="flex gap-2 mb-2 mt-5">
              <FullInput
                type="text"
                title="Staff Email"
                placeholder="Enter staff email"
                name="email"
                value={staffInfo.email}
                onChange={(e) => setStaffInfo({ ...staffInfo, email: e.target.value })}
              />
              <select
                className="rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                name="permission"
                value={staffInfo.permission}
                required
                onChange={(e) => setStaffInfo({ ...staffInfo, permission: e.target.value })}
              >
                <option value="">Select permission</option>
                <option value="Viewer">Viewer</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            <Button text="Add Staff" type="submit" />
          </form>
        </div>

        {/* Staff Table */}
        <h2 className="font-bold text-3xl mt-5">All Staffs</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Permission</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allStaffs.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{staff.email}</td>
                <td className="border border-gray-300 px-4 py-2">{staff.permission}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditStaff(staff)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >Edit</button>
                    <button
                      onClick={() => handleDeleteStaff(staff.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Edit Staff</h3>
            <form onSubmit={handleUpdateStaff}>
              <FullInput
                type="text"
                title="Email"
                value={staffInfo.email}
                onChange={(e) => setStaffInfo({ ...staffInfo, email: e.target.value })}
              />
              <select
                className="w-full mt-3 mb-4 rounded-md border py-2.5 pl-2"
                name="permission"
                value={staffInfo.permission}
                onChange={(e) => setStaffInfo({ ...staffInfo, permission: e.target.value })}
              >
                <option value="">Select permission</option>
                <option value="Viewer">Viewer</option>
                <option value="Editor">Editor</option>
              </select>
              <div className="flex justify-end gap-4">
                <Button text="Cancel" onClick={handleCancel}/>
                <Button text="Save" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTab;
