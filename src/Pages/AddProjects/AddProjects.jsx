import { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Textarea, Button, Chip } from "@nextui-org/react";
import Swal from 'sweetalert2';
import { Select, SelectItem } from "@nextui-org/react";
const img_hosting_token = import.meta.env.VITE_ImageUpload_Token;

const AddProjects = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectDescription: '',
        role: '',
        challenges: '',
        outcome: '',
        demo: '',
        liveLink: '',
        githubClient: '',
        githubServer: '',
        tags: [],
        features: [],
        technologies: [],
        skillInput: '',
        projectImgs: [],
        categories: ''
    });
    const categories = [
        { key: "mern", label: "MERN" },
        { key: "react", label: "ReactJs" },
        { key: "backend", label: "Backend" },
    ]
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTagsChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, tags: value.split(',').map(tag => tag.trim()) });
    };

    // const handleDescriptionChange = (e) => {
    //     const { value } = e.target;
    //     setFormData({ ...formData, features: value.split(',').map(feature => feature.trim()) });
    // };
    const handleDescriptionChange = (e) => {
        const { value } = e.target;
        setFormData({ 
            ...formData, 
            features: value.split(/[|]/).map(feature => feature.trim()) 
        });
    };
    
    const handleSkillChange = (e) => {
        setFormData({ ...formData, skillInput: e.target.value });
    };

    const addSkill = () => {
        if (formData.skillInput.trim() !== '') {
            setFormData({
                ...formData,
                technologies: [...formData.technologies, formData.skillInput.trim()],
                skillInput: ''
            });
        }
    };

    const removeSkill = (skill) => {
        setFormData({
            ...formData,
            technologies: formData.technologies.filter(tech => tech !== skill)
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImagePreviews = files.map(file => URL.createObjectURL(file));
        setImagePreviews([...imagePreviews, ...newImagePreviews]);
        setFormData({ ...formData, projectImgs: [...formData.projectImgs, ...files] });
    };

    const handleImageDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const newImagePreviews = files.map(file => URL.createObjectURL(file));
        setImagePreviews([...imagePreviews, ...newImagePreviews]);
        setFormData({ ...formData, projectImgs: [...formData.projectImgs, ...files] });
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        if (formData.projectImgs.length === 0) {
            Swal.fire('Error', 'Please upload at least one image.', 'error');
            return;
        }

        try {
            const imgURLs = await Promise.all(formData.projectImgs.map(async (img) => {
                const imgData = new FormData();
                imgData.append('image', img);

                const imgResponse = await fetch(`https://api.imgbb.com/1/upload?key=${img_hosting_token}`, {
                    method: 'POST',
                    body: imgData
                }).then(res => res.json());

                if (imgResponse.success) {
                    return imgResponse.data.display_url;
                } else {
                    throw new Error('Image upload failed');
                }
            }));

            const projectData = {
                ...formData,
                projectImgs: imgURLs
            };

            console.log('Form Data:', projectData);

            // Send projectData to the server
            await fetch('https://ashrafulislambackend.vercel.app/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectData)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setLoading(false);
                        Swal.fire('Thank you!', 'Project Successfully added', 'success');
                        // Reset form
                    }
                });
        } catch (error) {
            console.error('Image upload error:', error);
            Swal.fire('Error', 'Image upload failed.', 'error');
            setLoading(false);
        }
    };

    return (
        <div className='container mx-auto md:p-4 mt-3'>
            <form onSubmit={handleSubmit}>
                {imagePreviews.length > 0 && (
                    <div className="flex justify-center mb-4">
                        {imagePreviews.map((preview, index) => (
                            <img key={index} src={preview} alt="Image Preview" className="w-20 h-auto rounded-lg mr-2" />
                        ))}
                    </div>
                )}
                <div
                    className="flex items-center justify-center w-full"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleImageDrop}
                >
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input name='projectImgs' id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} multiple />
                    </label>
                </div>

                <div className='w-[75vw] md:w-[85vw] lg:w-[90vw] mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                        isRequired
                        type="text"
                        label="Project Title"
                        name="projectTitle"
                        placeholder="Enter project title"
                        className="mt-3"
                        size='md'
                        value={formData.projectTitle}
                        onChange={handleChange}
                    />
                    <Input
                        isRequired
                        label="Project Description"
                        name="projectDescription"
                        placeholder="Enter project description"
                        className="mt-3"
                        value={formData.projectDescription}
                        onChange={handleChange}
                    />

                    <div className="mt-3 col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Technologies</label>
                        <div className="flex items-center space-x-2 mt-2">
                            <Input
                                type="text"
                                name="skillInput"
                                placeholder="Add skill"
                                className="flex-grow"
                                value={formData.skillInput}
                                onChange={handleSkillChange}
                            />
                            <Button auto onClick={addSkill}>
                                Add skill +
                            </Button>
                        </div>
                        <div className="flex flex-wrap space-x-2 mt-2">
                            {formData.technologies.map((tech, index) => (
                                <Chip
                                    key={index}
                                    onClose={() => removeSkill(tech)}
                                    className="bg-blue-500 text-white"
                                    variant="flat"
                                    closeable
                                >
                                    {tech}
                                </Chip>
                            ))}
                        </div>
                    </div>
                    <Textarea
                        label="Features"
                        name="features"
                        placeholder="Enter description separated by commas"
                        className="mt-3 col-span-2"
                        value={formData.features.join(' | ')}
                        onChange={handleDescriptionChange}
                    />
                    <Textarea
                        label="Challenges"
                        name="challenges"
                        placeholder="Describe the challenges faced"
                        className="mt-3 col-span-2"
                        value={formData.challenges}
                        onChange={handleChange}
                    />
                    <Textarea
                        label="Outcome"
                        name="outcome"
                        placeholder="Describe the outcomes"
                        className="mt-3 col-span-2"
                        value={formData.outcome}
                        onChange={handleChange}
                    />
                    <Textarea
                        label="Demo"
                        name="demo"
                        placeholder="Link to demo or description"
                        className="mt-3 col-span-2"
                        value={formData.demo}
                        onChange={handleChange}
                    />
                    <Select
                        items={categories}
                        label="Project category"
                        placeholder="Select an categories"
                        className="mt-3"
                        name='categories'
                        value={formData.categories}
                        onChange={handleChange}
                    >
                        {(categories) => <SelectItem>{categories.label}</SelectItem>}
                    </Select>
                    <Input
                        isRequired
                        type="text"
                        label="Live Link"
                        name="liveLink"
                        placeholder="Enter the live project link"
                        className="mt-3"
                        size='md'
                        value={formData.liveLink}
                        onChange={handleChange}
                    />
                    <Input
                        isRequired
                        type="text"
                        label="GitHub Client"
                        name="githubClient"
                        placeholder="Enter the GitHub client repo link"
                        className="mt-3"
                        size='md'
                        value={formData.githubClient}
                        onChange={handleChange}
                    />
                    <Input
                        isRequired
                        type="text"
                        label="GitHub Server"
                        name="githubServer"
                        placeholder="Enter the GitHub server repo link"
                        className="mt-3"
                        size='md'
                        value={formData.githubServer}
                        onChange={handleChange}
                    />

                    <Textarea
                        label="Tags"
                        name="tags"
                        placeholder="Enter tags separated by commas"
                        className="mt-3 col-span-2"
                        value={formData.tags.join(', ')}
                        onChange={handleTagsChange}
                    />
                </div>
                <Input
                    isRequired
                    type="text"
                    label="Role"
                    name="role"
                    placeholder="Enter your role"
                    className="mt-3"
                    size='md'
                    value={formData.role}
                    onChange={handleChange}
                />
                <div className="flex justify-center mt-6">
                    {
                        loading ? <Button color="primary" isLoading className="px-10">
                            Add Project
                        </Button> : <Button type="submit" color="primary" className="px-10">
                            Add Project
                        </Button>
                    }
                </div>
            </form>
        </div>
    );
};

export default AddProjects;
