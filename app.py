import streamlit as st
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

# Set your Clarifai credentials and model details for DALL-E
PAT_DALLE = 'bfdeb4029ef54d23a2e608b0aa4c00e4'
USER_ID_DALLE = 'openai'
APP_ID_DALLE = 'dall-e'
MODEL_ID_DALLE = 'dall-e-3'
MODEL_VERSION_ID_DALLE = 'dc9dcb6ee67543cebc0b9a025861b868'

# Set your Clarifai credentials and model details for GPT-4 Turbo
PAT_GPT4 = 'bfdeb4029ef54d23a2e608b0aa4c00e4'
USER_ID_GPT4 = 'openai'
APP_ID_GPT4 = 'chat-completion'
MODEL_ID_GPT4 = 'gpt-4-turbo'
MODEL_VERSION_ID_GPT4 = '182136408b4b4002a920fd500839f2c8'

# Streamlit app
st.title("Pyresearch AI Integration App")

# Choose model type
model_type = st.radio("Select Model Type", ["DALL-E", "GPT-4 Turbo"])

# Input text prompt from the user
raw_text = st.text_input("Enter a text prompt:", 'ocr check mistake with image base with python opencv computer vision help out to know people')

# Button to generate result
if st.button("Generate Result"):
    if model_type == "DALL-E":
        # Connect to Clarifai API for DALL-E
        channel_dalle = ClarifaiChannel.get_grpc_channel()
        stub_dalle = service_pb2_grpc.V2Stub(channel_dalle)
        metadata_dalle = (('authorization', 'Key ' + PAT_DALLE),)
        userDataObject_dalle = resources_pb2.UserAppIDSet(user_id=USER_ID_DALLE, app_id=APP_ID_DALLE)

        # Make a request to Clarifai API for DALL-E
        post_model_outputs_response_dalle = stub_dalle.PostModelOutputs(
            service_pb2.PostModelOutputsRequest(
                user_app_id=userDataObject_dalle,
                model_id=MODEL_ID_DALLE,
                version_id=MODEL_VERSION_ID_DALLE,
                inputs=[
                    resources_pb2.Input(
                        data=resources_pb2.Data(
                            text=resources_pb2.Text(
                                raw=raw_text
                            )
                        )
                    )
                ]
            ),
            metadata=metadata_dalle
        )

        # Display the generated image if the request is successful
        if post_model_outputs_response_dalle.status.code != status_code_pb2.SUCCESS:
            st.error(f"DALL-E API request failed: {post_model_outputs_response_dalle.status.description}")
        else:
            output_dalle = post_model_outputs_response_dalle.outputs[0].data.image.base64
            st.image(output_dalle, caption='Generated Image (DALL-E)', use_column_width=True)

    elif model_type == "GPT-4 Turbo":
        # Connect to Clarifai API for GPT-4 Turbo
        channel_gpt4 = ClarifaiChannel.get_grpc_channel()
        stub_gpt4 = service_pb2_grpc.V2Stub(channel_gpt4)
        metadata_gpt4 = (('authorization', 'Key ' + PAT_GPT4),)
        userDataObject_gpt4 = resources_pb2.UserAppIDSet(user_id=USER_ID_GPT4, app_id=APP_ID_GPT4)

        # Make a request to Clarifai API for GPT-4 Turbo
        post_model_outputs_response_gpt4 = stub_gpt4.PostModelOutputs(
            service_pb2.PostModelOutputsRequest(
                user_app_id=userDataObject_gpt4,
                model_id=MODEL_ID_GPT4,
                version_id=MODEL_VERSION_ID_GPT4,
                inputs=[
                    resources_pb2.Input(
                        data=resources_pb2.Data(
                            text=resources_pb2.Text(
                                raw=raw_text
                            )
                        )
                    )
                ]
            ),
            metadata=metadata_gpt4
        )

        # Display the generated result if the request is successful
        if post_model_outputs_response_gpt4.status.code != status_code_pb2.SUCCESS:
            st.error(f"GPT-4 Turbo API request failed: {post_model_outputs_response_gpt4.status.description}")
        else:
            output_gpt4 = post_model_outputs_response_gpt4.outputs[0].data.image.base64
            st.image(output_gpt4, caption='Generated Image (GPT-4 Turbo)', use_column_width=True)



# Add the beautiful social media icon section
st.markdown("""
  <div align="center">
      <a href="https://github.com/pyresearch/pyresearch" style="text-decoration:none;">
        <img src="https://user-images.githubusercontent.com/34125851/226594737-c21e2dda-9cc6-42ef-b4e7-a685fea4a21d.png" width="2%" alt="" /></a>
      <img src="https://user-images.githubusercontent.com/34125851/226595799-160b0da3-c9e0-4562-8544-5f20460f7cc9.png" width="2%" alt="" />
        <a href="https://www.linkedin.com/company/pyresearch/" style="text-decoration:none;">
        <img src="https://user-images.githubusercontent.com/34125851/226596446-746ffdd0-a47e-4452-84e3-bf11ec2aa26a.png" width="2%" alt="" /></a>
      <img src="https://user-images.githubusercontent.com/34125851/226595799-160b0da3-c9e0-4562-8544-5f20460f7cc9.png" width="2%" alt="" />
      <a href="https://twitter.com/Noorkhokhar10" style="text-decoration:none;">
        <img src="https://user-images.githubusercontent.com/34125851/226599162-9b11194e-4998-440a-ba94-c8a5e1cdc676.png" width="2%" alt="" /></a>
      <img src="https://user-images.githubusercontent.com/34125851/226595799-160b0da3-c9e0-4562-8544-5f20460f7cc9.png" width="2%" alt="" />    
      <a href="https://www.youtube.com/@Pyresearch" style="text-decoration:none;">
        <img src="https://user-images.githubusercontent.com/34125851/226599904-7d5cc5c0-89d2-4d1e-891e-19bee1951744.png" width="2%" alt="" /></a>
      <img src="https://user-images.githubusercontent.com/34125851/226595799-160b0da3-c9e0-4562-8544-5f20460f7cc9.png" width="2%" alt="" />
      <a href="https://www.facebook.com/Pyresearch" style="text-decoration:none;">
        <img src="https://user-images.githubusercontent.com/34125851/226600380-a87a9142-e8e0-4ec9-bf2c-dd6e9da2f05a.png" width="2%" alt="" /></a>
      <img src="https://user-images.githubusercontent.com/34125851/226595799-160b0da3-c9e0-4562-8544-5f20460f7cc9.png" width="2%" alt="" />
      <a href="https://www.instagram.com/pyresearch/" style="text-decoration:none;">  
        <img src="https://user-images.githubusercontent.com/34125851/226601355-ffe0b597-9840-4e10-bbef-43d6c74b5a9e.png" width="2%" alt="" /></a>      
  </div>
  <hr>
""", unsafe_allow_html=True)
